// const UserCreation = require('./user/create');
// const UserSelection = require('./user/selectAll');
// const UserSelectionOne = require('./user/select');
// const UserDelete = require('./user/delete');
const userUpdateAction = require('./user/update');

// UserActions.insert('Awnish',29);
// UserSelection.select();
// UserSelectionOne.selectOne('68d307b0d2c137c3ad5ada52');
// UserDelete.delete('68d307b0d2c137c3ad5ada52');

userUpdateAction.update('68d307fbe53738ffb6e1087b',{
    name : 'Kumar Awnish',
    age :  27
});






