import pandas as pd
import pprint as pp
import numpy as np 

df = pd.read_excel('data/Altersverteilung210309.xlsx', sheet_name=None)

# old version for 210126, new version Inzidenzen -> inzidenz_tabelle
# print(df["Inzidenzen"].index.stop)
# print(df["Inzidenzen"].columns[1:][0])
# print(df["Inzidenzen"].loc[0])


def extract_incidence_data():
    heatmap_data =[]

    for row in range(0, df["inzidenz_tabelle"].index.stop):
        print(row)
        dataname = df["inzidenz_tabelle"].loc[row, "Altersgruppe" ]
        data_dicts =[]
        for week in df["inzidenz_tabelle"].columns[1:]:
            print("KW: {}, inzidenz: {}".format(week, df["inzidenz_tabelle"].loc[row, week]))
            inzidenz_val = round(df["inzidenz_tabelle"].loc[row, week],1)
            data_dicts.append({"x":str(week),"y":inzidenz_val})
            # data_dicts.append(df["inzidenz_tabelle"].loc[row, week])
        row_dict = {"name": dataname, "data":data_dicts}
        heatmap_data.append(row_dict)


    with open("outputdata.txt", "w") as outputfile: 
        # Writing data to a file 
        pp.pprint(heatmap_data, outputfile)

def calc_ifr():
    # Start from KW 10
    positive = pd.Series([3892, 7582, 23820, 31414, 36885, 30791, 22082, 18083, 12608, 10755, 7233, 5218, 4310, 3208, 2816, 5316, 3689, 3104, 2992, 3497, 4534, 5699, 7330, 8661, 9233, 8324, 8294, 10046, 13261, 14094, 18290, 29567, 44759, 78106, 116673, 126141, 126181, 127742, 125451, 135062, 165953, 185724, 138761, 128349])
    death = pd.Series([3, 18, 162, 602, 1368, 1737, 1595, 1170, 785, 517, 356, 273, 151, 114, 73, 49, 53, 46, 28, 26, 31, 29, 30, 31, 40, 37, 19, 32, 54, 65, 80, 121, 234, 401, 777, 1206, 1600, 2035, 2767, 3234, 4019, 4840, 5298, 5145])
    
    ifr = np.round(death/positive, 3)

    print(ifr)

def calc_mortality():
    mortality_2020 = pd.array([18903,19430,19184,18940,19800,19031,19650,18948,19492,19643,19884,19741,19703,20647,20513,19283,18553,17915,17636,16985,17157,16758,17267,16600,16392,17282,16433,16156,16516,16902,17395,17470,19672,17542,16627,16717,17080,17516,17377,17558,17426,17672,18515,18491,18965,19618,20052,21113,22423,23670,24267,24818,24531])
    covid_deaths = pd.array([0,0,0,0,0,0,0,0,0, 3, 18, 162, 602, 1368, 1737, 1595, 1170, 785, 517, 356, 273, 151, 114, 73, 49, 53, 46, 28, 26, 31, 29, 30, 31, 40, 37, 19, 32, 54, 65, 80, 121, 234, 401, 777, 1206, 1600, 2035, 2767, 3234, 4019, 4840, 5298, 5145 ])#2649, 3015, 4262

    mortality2020_wo_covid = mortality_2020 - covid_deaths
    print(mortality2020_wo_covid)

if __name__=="__main__": 
    extract_incidence_data()
    #calc_ifr()