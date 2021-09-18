if(process.env.NODE_ENV === 'production') { // 만약 deploy한 상태에서 변경을 하고자 한다면
  module.exports = require('./prod')
}else{
  module.exports = require('./dev')
}