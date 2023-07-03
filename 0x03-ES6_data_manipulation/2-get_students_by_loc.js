const getStudentsByLocation = (students, city) => {
	const arrayObjec = students.filter((function) => function.location === city);
	return arrayObjec;
};

export default getStudentsByLocation;
