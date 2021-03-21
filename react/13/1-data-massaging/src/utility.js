const utility = {
  getNames(data) {
    return data.map((item) => item.name);
  },
  before1990(data) {
    return data.filter((item) => {
      return new Date(item.birthday).getFullYear() < 1990;
    });
  },
};

export default utility;
