import React from 'react'
import './GeneratorCode.scss';
import { image } from './ImageLink';

function GeneratorCode({ sendDate }) {

  const codeTemplate = `
    <html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title></title>
  </head>
  <body text="#000000" bgcolor="#FFFFFF">
    Z poważaniem,<br>
    <div class="moz-signature">
      <div class="moz-signature">
        <div class="moz-signature">
          <table width="100%" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td width="10" valign="top" align="left">
                  <p style="padding-right: 10px; font-family: Helvetica,
                    Arial, sans-serif; font-size: 14px; line-height:
                    16px;"> ${image} </p>
                </td>
                <td align="left">
                  <p style="font-family: Helvetica, Arial, sans-serif;
                    font-size: 14px; line-height: 16px;
                    color:rgb(33,33,33);"><span style="font-weight:
                      bold; display:inline;" class="txt
                      signature_name-target sig-hide">${sendDate}</span><span
                      class="title-sep sep" style="display: inline;"></span><br>
                    <span class="txt signature_jobtitle-target sig-hide"
                      style="display: inline;">Informatyk</span><br>
                    Nr telefonu: <span class="txt
                      signature_mobilephone-target sig-hide">71 319 13
                      36</span><span class="txt signature_fax-target
                      sig-hide"></span><br>
                       Nr kom: <span class="txt
                      signature_mobilephone-target sig-hide">+48 517 621 477</span><span class="txt signature_fax-target
                      sig-hide"></span><br>
                    E-mail: <a class="link email signature_email-target
                      sig-hide" href="mailto:lukasz.brosch@wolow.pl"
                      style="text-decoration: none; display: inline;">lukasz.brosch@wolow.pl</a><span
                      class="signature_email-sep sep" style="display:
                      inline;"></span></p>
                  <p style="font-family: Helvetica, Arial, sans-serif;
                    font-size: 14px; line-height: 16px;"><span
                      class="txt signature_address-target sig-hide"
                      style="display: inline;">Urząd Miejski w Wołowie<br>
                      ul. Rynek 34<br>
                      56-100 Wołów<br>
                      Polska </span><br>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr style=" background-color: #247bc0;">
          <p style="font-family: Helvetica, Arial, sans-serif;
            font-size: 12px; line-height: 12px;"> This e-mail may
            contain information that is privileged, confidential or
            otherwise protected from disclosure. It must not be used by,
            or its contents copied or disclosed to persons other than
            the intended recipient. </p>
          <hr style=" background-color: #247bc0;"></div>
      </div>
    </div>
  </body>
</html>`;

  return (
    <div className='code-box'>
      <code>
        <div className="code-template">
          {sendDate}
          {codeTemplate}
        </div>
      </code>
    </div>
  )
}

export default GeneratorCode