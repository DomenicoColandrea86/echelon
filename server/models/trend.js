// Trend Model
class Trend {
  constructor(trend) {
    this.name = trend.name;
    this.type = trend.type;
    this.color = trend.color;
    this.style = trend.dashStyle;
    this.values = Trend.mapSeriesData(trend.data);
  }

  static mapSeriesData(data) {
    return data.map(d => ({
      x: d[0],
      y: d[1],
    }));
  }
}

module.exports = Trend;
