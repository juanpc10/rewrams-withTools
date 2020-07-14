const Dm = require('../models/dm');



async function getUserDms (req, res) {
  try {
    const dms = await Dm.find({account: req.params.account});
    res.status(200);
    res.json(dms);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}

async function postUserDm (req, res) {
  try {
    const { account, username, full_name, lastMessage } = req.body;
    const dm = Dm.create( { account, username, full_name, lastMessage } );
    res.status(200);
    res.json(dm);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(400);
  }
}


async function deleteUserDms (req, res) {
  try {
    await Dm.findByIdAndDelete({_id: req.params.id});
    res.sendStatus(204);
  } catch (error) {
    console.log('error', error);      //eslint-disable-line no-console
    res.sendStatus(500);
  }
}






module.exports = {
  getUserDms,
  postUserDm,
  deleteUserDms,
  getUserDms
};