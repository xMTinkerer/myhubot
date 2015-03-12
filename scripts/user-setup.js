// Description:
//   Interact with xMatters web services.
//
// Dependencies:
//   "<module name>": "<module version>"
//
// Configuration:
//
//   HUBOT_XMATTERS_REST_USERNAME - Username to authenticate with for REST operations
//   HUBOT_XMATTERS_REST_PASSWORD - Password to authenticate with for REST operations
//   HUBOT_XMATTERS_SOAP_USERNAME - Username to authenticate with for SOAP operations
//   HUBOT_XMATTERS_SOAP_PASSWORD - Password to authenticate with for SOAP operations
//   HUBOT_XMATTERS_URL           - Base url for the xMod instance (i.e. https://company.instance.xmatters.com)
//
// Commands:
//   hubot start
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//  xMTinkerer

processFirstName = function( resp ) {
  resp.reply( 'Nice to meet you ' + resp.message );
}

module.exports = function(robot) {
  robot.respond( /start/i, function(msg) {

    robot.logger.info( 'msg: ' + JSON.stringify( msg.message ) );
    msg.reply( 'Hi, ' + msg.message.user.name + ', welcome to my world. What is your First Name?' );
    robot.eatOneResponse( msg.message.user.name, processFirstName );

  });


}

