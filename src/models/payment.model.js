module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    paymentId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    amount: {
      type: Sequelize.INTEGER
    },
    timeStamp: {
      type: Sequelize.STRING
    },
    discountCoupenId: {
      type: Sequelize.INTEGER
    },
    remoteTransactionId: {
      type: Sequelize.INTEGER
    },
    paymentMethod: {
      type: Sequelize.INTEGER
    },
  });
  return Payment;
};