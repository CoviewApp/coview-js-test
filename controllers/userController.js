const users = []; // This would ideally be a database in a real application

exports.listUsers = (req, res) => {
    const { search } = req.query;
    if (search) {
        const filteredUsers = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
        res.json(filteredUsers);
        return;
    }
    res.json(users);
};

exports.createUser = (req, res) => {
    const user = req.body;
    user.id = users.length + 1; // Assign a unique ID
    users.push(user);
    res.status(201).send(user);
};

exports.getUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.userId));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.send(user);
};

exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.userId));
    if (!user) {
        return res.status(404).send('User not found');
    }
    // Bug: Does not validate if the incoming request body is valid
    Object.assign(user, req.body);
    res.send(user);
};

exports.deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.userId));
    if (index === -1) {
        return res.status(404).send('User not found');
    }
    users.splice(index, 1);
    res.status(204).send();
};
