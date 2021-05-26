const getQuery = (req) => {
    let answer = `SELECT * FROM persons WHERE USER_ID = '${req.query.id}'`;
    if (!req.query.findFirstName && !req.query.findLastName) {
        answer += ` ORDER BY ${req.query.sort}`;
        return answer;
    } else if (req.query.findFirstName && !req.query.findLastName) {
        answer += `AND FIRSTNAME LIKE '%${req.query.findFirstName}%' ORDER BY ${req.query.sort}`;
        return answer;
    } else if (!req.query.findFirstName && req.query.findLastName) {
        answer += `AND LASTNAME LIKE '%${req.query.findLastName}%' ORDER BY ${req.query.sort}`;
        return answer;
    } else if (req.query.findFirstName && req.query.findLastName) {
        answer += `AND LASTNAME LIKE '%${req.query.findLastName}%' AND FIRSTNAME LIKE '%${req.query.findFirstName}%' ORDER BY ${req.query.sort}`;
        return answer;
    }
};

const postQuery = (req) => {
    return `INSERT INTO persons (USER_ID, FNAME, LNAME, AGE, CITY, PHONENUMBER, COMPANYNAME, EMAIL)VALUES 
('${req.query.id}', '${req.body.firstName}', '${req.body.lastName}', 
'${req.body.age}', '${req.body.city || "NULL"}', '${
        req.body.phoneNumber || "NULL"
    }', '${req.body.companyName || "NULL"}', '${req.body.email}')`;
};

const deleteQuery = (req) => {
    let answer = ` DELETE FROM persons WHERE (ID = ${req.query.id})`;
    if (req.query.id === "all") {
        answer = ` DELETE FROM persons WHERE (USER_ID = '${req.query.id}')`;
    }
    return answer;
};

const putQuery = (req) => {
    const answer = `UPDATE persons SET ${req.body.changeParam} = '${req.body.newData}' WHERE (ID = ${req.query.tableID})`;
    return answer;
};
module.exports = { postQuery, getQuery, deleteQuery, putQuery };
