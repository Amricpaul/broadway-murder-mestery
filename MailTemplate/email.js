export const emailTemplate = async (data, guestCharacter) => {
    return `<table align="left" cellspacing="0" cellpadding="0" border="0" style="outline:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;width: 660px;min-width:600px;margin:0 auto;padding:0">
    <tbody><tr>
            <td width="600" style="outline:none;width:600px;min-width:600px;margin:0;padding:0" align="left" valign="top">
    <table cellspacing="0" cellpadding="0" border="0" style="outline:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%;margin:0;padding:0" bgcolor="#ffffff">
    <tbody><tr>
    <td style="outline:none;width:100%;margin:0;padding:0" align="left" valign="top">
    <table cellspacing="0" cellpadding="0" border="0" style="outline:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%;margin:0;padding:0">
    <tbody><tr>
    <td style="outline:none;width:100%;margin:0;padding:0" align="left" valign="top">
    <table cellspacing="0" cellpadding="0" border="0" style="outline:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%;margin:0;padding:0">
        <tbody><tr>
    <td style="outline:none;width:100%;color:#17181a;font-family:'FreightSans Pro','Segoe UI','SanFrancisco Display',Arial,sans-serif;font-size: 17px;font-style:normal;font-weight:normal;line-height:30px;word-spacing:0;margin:0;padding: 40px 20px 0;text-align: left;" align="center" valign="top">
    <p>Hi ${guestCharacter.player.name},</p></td>
    </tr>
    <tr>
    <td style="outline:none;width:100%;color: #373737;font-family:'Fakt Pro','Segoe UI','SanFrancisco Display',Arial,sans-serif;font-size: 16px;font-style:normal;font-weight:normal;line-height:24px;word-spacing:0;margin:0;padding: 50px 20px 0;" align="left" valign="top">
    <p style="outline:none;margin:0;padding:0">You're cordially invited to a Murder Mystery Party by <strong>${data.hostName}</strong> on <strong>${data.partyDate}</strong> at <strong>${data.partyTime}</strong>!</p>
  
  <p>Party Location: <strong> ${data.partyLocation}</strong></p>
    
    <p>A special note from your host: <br> <strong>${data.noteFromHost}</strong></p>
  
  <p>Each guest has been assigned a character in the game. Your role details and costume suggestions are below:</p><table style="
      font-size: 14px;
  " border="1">
            <thead>
                <tr>
                    <th>CHARACTER NAME</th>
                    <th>CHARACTER DESCRIPTION</th>
                    <th>COSTUME SUGGESTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>${guestCharacter.name}</th>
                    <th>${guestCharacter.description}</th>
                    <th>${guestCharacter.costumeSuggestion}</th>
                </tr>
            </tbody>
      </table>
    <p style="outline:none;margin:2em 0 0;padding:0"></p><p>To learn more about your character, get links to purchase recommended costumes on Amazon, and additional information on this game and how to play, visit the game dashboard: <a href="${data.game.link}">LINK TO THE GAME DASHBOARD</a></p>
      <p>You are encouraged to show up in costume based on your own comfort level.</p>
      <p>What you need to prepare in advance:</p>
      <ul>
          <li>If you are playing this game in-person, then there is nothing you need to prepare in advance. Materials will be provided by the host upon arrival at the event.</li>
          <li>If you are playing virtually via Zoom or another video chat platform, we recommend visiting the game dashboard link above to download the Character Script for the role you've been assigned, as well as the Question Menu.</li>
      </ul>
      <p>For questions regarding this party, please contact your host: ${data.hostEmail}</p>
      <p>Break a leg!</p>
      <p>Want to host your own Murder Mystery Party? Visit us at <a href="https://www.BroadwayMurderMysteries.com">www.BroadwayMurderMysteries.com</a>!</p>
  <p></p>
    
    </td>
    </tr>
    
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
                <table cellspacing="0" cellpadding="0" border="0" style="outline:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%;margin:0;padding:0">
    <tbody><tr>
    <td style="outline:none;width:100%;color:#919599;font-family:'Fakt Pro','Segoe UI','SanFrancisco Display',Arial,sans-serif;font-size:12px;font-style:normal;font-weight:normal;border-radius: 40px;line-height:16px;word-spacing:0;background-color: black;margin:0;padding: 49px;" align="center" bgcolor="#303030" valign="top">
    
    <table cellspacing="0" cellpadding="0" border="0" style="outline:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:100%;margin:0;padding:0">
    <tbody><tr>
    <td style="outline:none;width:100%;margin:0;padding:0" align="left" valign="top">
    <table cellspacing="0" cellpadding="0" border="0" style="outline:none;border-collapse:collapse;border-spacing:0;table-layout:fixed;width:auto;margin:0 auto;padding:0">
    <tbody><tr>
    <td style="outline:none;width:100%;height:auto;margin:0;padding:0 0 2em" align="left" valign="top">
        <a href="https://www.broadwaymurdermysteries.com/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.broadwaymurdermysteries.com">
            <img src="https://cdn.shopify.com/s/files/1/0644/1441/7125/files/Logo_FINAL-small_300x.png?v=1653423701" align="center" border="0" width="56" style="outline:none;display:block;height:auto;line-height:100%;text-decoration:none;width: 173px!important;margin:0;padding:0;margin: auto;border-style:none" data-bit="iit">
        </a>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    
    
    <div style="margin-bottom:35px;font-size:16px;color:#ffffff;line-height:22px">
    <p style="outline:none;margin:0;padding:0;font-size: 14px;">Throw a murder mystery party on your own with one of our signature game kits, or hire our team to host a killer experience that puts your guests in the spotlight!</p>
    
    </div>
    
    
    <p style="outline:none;margin:0;padding:0">Want to host your own Murder Mystery Party? Visit us at <br><a href="https://www.BroadwayMurderMysteries.com" style="
        color: white;
    ">www.BroadwayMurderMysteries.com</a></p>
    
    
    </td>
    </tr>
    </tbody></table>
    
            </td>
        </tr>
    </tbody></table>`;
}