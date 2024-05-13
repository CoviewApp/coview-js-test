const users = []; // This would ideally be a database in a real application

exports.listUsers = (req, res) => {
    res.json(users);
};

exports.createUser = (req, res) => {
    const user = req.body;
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
