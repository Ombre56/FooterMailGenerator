import React from 'react'
import './GeneratorCode.scss';
import { saveAs } from "file-saver";
import { image } from './ImageLink';

function GeneratorCode({ userData, handleReset, visibleButton }) {

  const downloadTxtFile = () => {
    const codeTemplate = `<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title></title>
  </head>
  <body text="#000000" bgcolor="#FFFFFF" style="font-family: 'Albert Sans', sans-serif;">
    <span style="font-size: 16px;">Z poważaniem,</span><br><br>
    <div class="moz-signature">
      <div class="moz-signature">
        <div class="moz-signature">
          <table width="100%" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td width="10" valign="top" align="left">
                  <p style="padding-right: 10px; font-family: 'Albert Sans', sans-serif; font-size: 14px; line-height:
                    16px;"> ${image} </p>
                </td>
                <td align="left">
                  <p style="font-family: 'Albert Sans', sans-serif;
                    font-size: 18px; line-height: 20px;
                    color:rgb(33,33,33);"><span style="font-weight:
                      bold; display:inline;" class="txt
                      signature_name-target sig-hide">${userData.name} ${userData.surname}</span><span
                      class="title-sep sep" style="display: inline;"></span><br><br>
                    <span class="txt signature_departmenttitle-target sig-hide"
                      style="display: inline; font-style: italic; font-size: 14px; line-height: 16px;">${userData.department}</span><br>
                    <span class="txt signature_jobtitle-target sig-hide"
                      style="display: inline; font-style: italic; font-size: 14px; line-height: 16px;">${userData.position}</span><br>
                      <br>
                    <span style="font-family: 'Albert Sans', sans-serif;
                    font-size: 14px; line-height: 16px;">Nr telefonu:</span> <span class="txt
                      signature_mobilephone-target sig-hide" style="font-size: 14px; line-height: 16px;">${userData.telephone}</span><span class="txt signature_fax-target
                      sig-hide"></span><br>
                    <span style="font-family: 'Albert Sans', sans-serif;
                    font-size: 14px; line-height: 16px;">E-mail:</span> <a class="link email signature_email-target
                      sig-hide" href="mailto:${userData.email}"
                      style="text-decoration: none; display: inline; font-size: 14px; line-height: 16px;">${userData.email}</a><span
                      class="signature_email-sep sep" style="display:
                      inline;"></span></p>
                  <p style="font-family: 'Albert Sans', sans-serif;
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
          <p style="font-family: 'Albert Sans', sans-serif;
            font-size: 9px; line-height: 9px;"> 
            Niniejsza wiadomość jest poufna i objęta tajemnicą korespondencji. Wiadomość jest przeznaczona wyłącznie dla adresata. Bez zgody nadawcy zabronione jest jakiekolwiek ujawnianie, kopiowanie, rozpowszechnianie lub inne postępowanie dotyczące tej wiadomości. Jeśli otrzymali Państwo tę wiadomość przez pomyłkę, prosimy o bezzwłoczne skontaktowanie się z nadawcą oraz usunięcie wiadomości z Państwa komputera i serwera.<br> 
            This message is confidential and covered by the secret of correspondence. The message is intended only for the addressee.  No disclosure, copying, distribution or otherwise proceedings regarding this  message is prohibited without the consent of the sender.  If you have received this message by mistake, please promptly  contact the sender and delete this message from your computer and server.<br>
            Odbiorca wiadomości wyraża zgodę na udostępnianie swojego adresu email wszystkim osobom biorącym udział w realizacji kontraktu (umowy), lub innego zdarzenia prawnego w którym uczestniczy, lub będzie uczestniczyć Organizacja. Zgoda może zostać cofnięta w dowolnym momencie przez wysłanie wiadomości na adres e-mail: ${userData.email}.<br>
            The recipient of the message consents to his e-mail address available to all persons participating in the execution of the contract (agreement), or other legal event in which he participates, or organization will be
            participated. The consent may be withdrawn at any time by sending a message to the following e-mail address: ${userData.email}. 
            Informacja o przetwarzaniu danych osobowych:  ${userData.email}. </p>
          <hr style=" background-color: #247bc0;"></div>
      </div>
    </div>
  </body>
</html>`;

    const blob = new Blob([codeTemplate], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `Stopka dla ${userData.name}_${userData.surname}.html`);   
  }

  const handleDownload = () => {
    downloadTxtFile();
    handleReset();
  }

  const giveMessage = () => {
    return alert('Najpierw uzupełnij pola!')
  }

  return (
    <>
      <div className='code-box'>
        {visibleButton ?
          <button className='download-button' onClick={handleDownload}>Pobierz</button> :
            <button className='download-button-disabled' onClick={giveMessage}>Pobierz</button>
        }
      </div>
    </>
  )
}

export default GeneratorCode
