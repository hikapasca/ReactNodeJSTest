const axios = require("axios");
class JobsContoller {
  static async getJobList(req, res) {
    try {
      const { data } = await axios.get(
        "https://jobs.github.com/positions.json"
      );
      return res.status(200).json({ message: data });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
  static async getJobDetail(req, res) {
    try {
      const { id } = req.params;
      const { data } = await axios.get(
        `https://jobs.github.com/positions/${id}.json`
      );
      return res.status(200).json({ message: data });
    } catch (err) {}
  }

  static async getJobByFilter(req, res) {
    try {
      const { type } = req.query;
      const { description } = req.query;
      const { data } = await axios.get(
        "https://jobs.github.com/positions.json"
      );

      if (type) {
        const filterByType = data.filter((result, idx) => result.type === type);
        return res.status(200).json({ message: filterByType });
      }

      return res.status(200).json({ message: data });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = JobsContoller;
