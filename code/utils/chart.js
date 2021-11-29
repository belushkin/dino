import { addNewRecord, getRecords } from "./api";

export function showchart() {
  window.addEventListener("DOMContentLoaded", (event) => {
    // setting handlers
    document.getElementById("100").addEventListener("click", function () {
      addNewRecord("100");
      show();
    });
    document.getElementById("500").addEventListener("click", function () {
      addNewRecord("500");
      show();
    });
    document.getElementById("2000").addEventListener("click", function () {
      addNewRecord("2000");
      show();
    });
    document.getElementById("5000").addEventListener("click", function () {
      addNewRecord("5000");
      show();
    });
    document.getElementById("10000").addEventListener("click", function () {
      addNewRecord("10000");
      show();
    });
  });
}

function show() {
  document.getElementById("vote-form").style.display = "none";
  document.getElementById("chart").style.display = "block";

  const records = [];
  getRecords()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        records.push(doc.data()["cnt"]);
      });

      const options = {
        series: [
          {
            data: records,
          },
        ],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "100-499",
            "500-1999",
            "2000-4999",
            "5000-9999",
            "10000+",
          ],
        },
      };
      const chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}
