import pandas as pd
import pprint as pp
import numpy as np
import matplotlib.pyplot as plt
from collections import namedtuple

datafile = 'data/Altersverteilung210427.xlsx'
mortality_file = 'data/Fallzahlen_Kum_Tab210427.xlsx'
test_file = 'data/Testzahlen-gesamt210428.xlsx'
# old version for 210126, new version Inzidenzen -> inzidenz_tabelle
# print(df["Inzidenzen"].index.stop)
# print(df["Inzidenzen"].columns[1:][0])
# print(df["Inzidenzen"].loc[0])

# RKI changes regularly the sheet names which makes me hard to automate the visualization
sheetname = "Inzidenzen"
sheetname = "inzidenz_tabelle"
sheetname = "7-Tage-Inzidenzen"
sheetname = "7Tage-Inzidenz"
sheetname = "7-Tages-Inzidenz"

xl = pd.ExcelFile(datafile)
sheetname = xl.sheet_names[0]

df = pd.read_excel(datafile, sheet_name=None)

filter = namedtuple("Filter", ["val", "text"])
filter.val = False
filter.text = "2021"

def extract_incidence_data():
    """Extract and printout data as javascript variable for Heatmap.vue"""
    heatmap_data =[]

    for row in range(0, df[sheetname].index.stop):
        print(row)
        dataname = df[sheetname].loc[row, "Altersgruppe" ]
        data_dicts =[]
        for week in df[sheetname].columns[1:]:
            if filter.val and (not filter.text in week):
                continue
            print("KW: {}, inzidenz: {}".format(week, df[sheetname].loc[row, week]))
            inzidenz_val = round(df[sheetname].loc[row, week])
            data_dicts.append({"x":str(week),"y":inzidenz_val})
            # data_dicts.append(df[sheetname].loc[row, week])
                
            row_dict = {"name": dataname, "data":data_dicts}
        heatmap_data.append(row_dict)


    with open("outputincidence.txt", "w", newline='') as outputfile: 
        # Writing data to a file
        pp.pprint("var inzidenz_data = ", outputfile)
        pp.pprint(heatmap_data, outputfile)


def calc_mortality():
    mortality_2020 = pd.array([18903,19430,19184,18940,19800,19031,19650,18948,19492,19643,19884,19741,19703,20647,20513,19283,18553,17915,17636,16985,17157,16758,17267,16600,16392,17282,16433,16156,16516,16902,17395,17470,19672,17542,16627,16717,17080,17516,17377,17558,17426,17672,18515,18491,18965,19618,20052,21113,22423,23670,24267,24818,24531])
    covid_deaths = pd.array([0,0,0,0,0,0,0,0,0, 3, 18, 162, 602, 1368, 1737, 1595, 1170, 785, 517, 356, 273, 151, 114, 73, 49, 53, 46, 28, 26, 31, 29, 30, 31, 40, 37, 19, 32, 54, 65, 80, 121, 234, 401, 777, 1206, 1600, 2035, 2767, 3234, 4019, 4840, 5298, 5145 ])#2649, 3015, 4262

    mortality2020_wo_covid = mortality_2020 - covid_deaths
    print(mortality2020_wo_covid)

def extract_test_death_data():
    """Extract and printout data as javascript variable for Test.vue"""

    sheetname = "1_Testzahlerfassung"
    num_of_tests = []
    num_of_positives = []
    positive_weeks={}
    positive_rates=[]
    total=[]
    excel_data = pd.read_excel(test_file, sheet_name=sheetname)
    print(excel_data)
    print("Col 0")
    print(excel_data.columns[0:])
    print ("Col 1")
    print(excel_data.loc[1, "Anzahl Testungen"])
    # excel_data.plot(x="Kalenderwoche", y=["Anzahl Testungen", "Positiv getestet"])
    # plt.show()
    
    
    for row in range(0, excel_data.index.stop):
        if row == 0:
            week = "10/2020"
        else:
            week = excel_data.loc[row, "Kalenderwoche" ]
        if "*" in week:
            week = week[:-1]
        if week == "Summe":
            total.append(excel_data.loc[row, "Anzahl Testungen" ])
            total.append(excel_data.loc[row, "Positiv getestet" ])
            break
        else:
            number_test = excel_data.loc[row, "Anzahl Testungen" ]
            positive = excel_data.loc[row, "Positiv getestet" ]
            num_of_tests.append(number_test)
            num_of_positives.append(positive)
            positive_weeks[week] = positive
            positive_rates.append(np.round(positive/number_test*100,1))

    num_of_deaths =[]
    ifr =[]

    # filename = 'data/COVID-19_Todesfaelle210326.xlsx'
    # sheetname = "COVID_Todesfälle"
    # excel_data = pd.read_excel(filename, sheet_name=sheetname)
    # for idx, row in enumerate(range(4, excel_data.index.stop)):
        
    #     week = excel_data.loc[row, "Sterbejahr" ]
    #     death = excel_data.loc[row, "Anzahl verstorbene COVID-19 Fälle" ]
    #     if "<" in death:
    #         death = death[1:]
    #     num_of_deaths.append(death)
    #     fatality = int(death) / float(num_of_positives[idx])
    #     ifr.append(np.round(fatality,3))
    

    
    week_sheet = "Fälle-Todesfälle-gesamt"
    daily_data = pd.read_excel(mortality_file, sheet_name=week_sheet, skiprows=2)
    cw = 11
    year=2020
    print("Start in calendar week 11")
    print(daily_data.loc[13, "Differenz Vortag Todesfälle"])
    print(daily_data.columns[5])
    count = 0
    death_per_week =0
    #start with week 10
    num_of_deaths =[2]
    week_numbers=["10/2020"]
    for row in range(13, daily_data.index.stop):
        
        diff = daily_data.loc[row, "Differenz Vortag Todesfälle"]
        if np.isnan(diff):
            break
        if count < 7:
            death_per_week = death_per_week + diff
            count=count +1
        else:
            num_of_deaths.append(death_per_week)
            cal_week = f"{cw}/{year}"
            print(f"{cal_week}: start at {daily_data.loc[row, 'Berichtsdatum']} {death_per_week}")
            if cal_week in positive_weeks:
                fatality = int(death_per_week) / float(positive_weeks[cal_week])
                ifr.append(np.round(fatality,3))
            week_numbers.append(f"{cw}/{year}")
            count = 1
            death_per_week = diff
            cw=cw+1
        if cw > 53:
            cw=1
            year = year + 1
    
    
    with open("outputtest.txt", "w") as outputfile: 
        # Writing data to a file
        # outputfile.write(f"var week_numbers = {week_numbers}\n")
        # outputfile.write(f"var num_of_tests = {num_of_tests}\n")
        # outputfile.write(f"var num_of_positives = {num_of_positives}\n")
        outputfile.write("var week_numbers =")
        pp.pprint(week_numbers, outputfile)
        outputfile.write("var num_of_tests =")
        pp.pprint(num_of_tests, outputfile)
        outputfile.write("var num_of_positives =")
        pp.pprint(num_of_positives, outputfile)
        outputfile.write("var positive_rates =")
        pp.pprint(positive_rates, outputfile)
        outputfile.write("var num_of_deaths =")
        pp.pprint(num_of_deaths, outputfile)
        outputfile.write("var ifr =")
        pp.pprint(ifr, outputfile)


    # print(mortality)

if __name__=="__main__": 
    extract_incidence_data()
    extract_test_death_data()
    # extract_mortality()
    