// Date generator, create date series from 06.03.2020 to 26.10.2020
var r_dates = [];
var ydate = new Date(2020, 02, 06); //06.03.2020
for (count = 0; count < 300; count++) { //29.12.2020
    r_dates.push(ydate.setDate(ydate.getDate() + 1));
    document.write(ydate.toDateString());
}
document.write("\n");
document.write(r_dates);