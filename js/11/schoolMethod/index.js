/* eslint-disable no-unused-expressions */
const school = {
  teachers: [
    {
      id: 1,
      name: 'Pinchas',
      subjects: ['chemistry', 'biology', 'physics'],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: 'Williams',
      subjects: ['history', 'ethics'],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: 'Jennifer',
      age: 20,
    },
    {
      id: 11,
      name: 'Howard',
      age: 23,
    },
    {
      id: 12,
      name: 'Old-Timmy',
      age: 86,
    },
    {
      id: 13,
      name: 'Houston',
      age: 21,
    },
  ],
  findPerson(id, type) {
    return this[type].find((item) => item.id === id);
  },
  assignStudent(id, subject) {
    const student = this.findPerson(id, 'students');
    const teacher = this.teachers.find((teacher) => teacher.subjects.includes(subject) && teacher.capacityLeft > 0);
    if (teacher) {
      teacher.students.push(student);
      teacher.capacityLeft -= 1;
    } else {
      console.log('Sorry, no available teachers left');
    }
  },
  assignTeachersSubject(id, subject) {
    const teacher = this.findPerson(id, 'teachers');
    teacher && !teacher.subjects.includes(subject) ? teacher.subjects.push(subject) : null;
  },
  newTeacher(name, subjects, capacity) {
    const id = this.teachers.length;
    this.teachers.push({
      id,
      name,
      subjects,
      students: [],
      capacityLeft: capacity,
    });
  },
};
