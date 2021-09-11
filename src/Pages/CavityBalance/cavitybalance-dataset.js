export let defaultDataset = [
  { weight1: 0.752, weight2: 2.328, weight3: 7.154 },
  { weight1: 0.77, weight2: 2.359, weight3: 7.368 },
  { weight1: 0.734, weight2: 2.254, weight3: 7.598 },
  { weight1: 0.725, weight2: 2.275, weight3: 7.836 },
];

export function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export let defaultChartDatasets = {
  datasets: [
    { data: [1, 1, 1], label: "Weight 1" },
    { data: [1, 3, 2], label: "Weight 2" },
    { data: [2, 9, 2], label: "Weight 3" },
  ],
  labels: ["0", "1", "2"],
};
