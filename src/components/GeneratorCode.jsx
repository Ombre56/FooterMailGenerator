import React from 'react'
import './GeneratorCode.scss';
import { image } from './ImageLink';

function GeneratorCode({ sendDateToChild }) {
  return (
  <>
    <div className='code-box'>
      <code>
        <div className="code-template" id='text'>
          &lt;html&gt;<br />
            &nbsp;&lt;head&gt;<br />
          	&nbsp;&nbsp;&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;<br />
          &nbsp;&nbsp;&lt;title&gt;&lt;/title&gt;<br />
        &nbsp;&lt;/head&gt;<br />
        &nbsp;&lt;body text=&quot;#000000&quot; bgcolor=&quot;#FFFFFF&quot;&gt;<br />
        &nbsp;&nbsp;Z poważaniem,&lt;br /&gt;<br />
    &nbsp;&nbsp;&lt;div class=&quot;moz-signature&quot;&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;moz-signature&quot;&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class=&quot;moz-signature&quot;&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table width=&quot;100%&quot; cellpadding=&quot;0&quot; border=&quot;0&quot;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td width=&quot;10&quot; valign=&quot;top&quot; align=&quot;left&quot;&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p style=&quot;padding-right: 10px; font-family: Helvetica,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arial, sans-serif; font-size: 14px; line-height:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16px;&quot;&gt; <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{image} &lt;/p&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td align=&quot;left&quot;&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p style=&quot;font-family: Helvetica, Arial, sans-serif;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: 14px; line-height: 16px;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color:rgb(33,33,33);&quot;&gt;&lt;span style=&quot;font-weight:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bold; display:inline;&quot; class=&quot;txt<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signature_name-target sig-hide&quot;&gt;<b><u>{sendDateToChild.name} {sendDateToChild.surname}</u></b>&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;span<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class=&quot;txt signature_departmenttitle-target sig-hide&quot;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style=&quot;display: inline; font-style: italic;&quot;&gt;<b><u>{sendDateToChild.department}</u></b>&lt;span&gt;&lt;br /&gt;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class=&quot;txt signature_jobtitle-target sig-hide&quot;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style=&quot;display: inline; font-style: italic;&quot;&gt;<b><u>{sendDateToChild.position}</u></b>&lt;/span&gt;&lt;br /&gt;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nr telefonu: &lt;span class=&quot;txt<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signature_mobilephone-target sig-hide&quot;&gt;<b><u>{sendDateToChild.telephone}</u></b>&lt;/span&gt;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class=&quot;txt signature_fax-target<b />
                      sig-hide&quot;&gt;&lt;/span&gt;&lt;br /&gt;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-mail: &lt;a class=&quot;link email signature_email-target<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sig-hide&quot; href=&quot;mailto:<b><u>{sendDateToChild.email}</u></b>&quot;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style=&quot;text-decoration: none; display: inline;&quot;&gt;<b><u>{sendDateToChild.email}</u></b>&lt;/a&gt;&lt;span<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class=&quot;signature_email-sep sep&quot; style=&quot;display:
                      inline;&quot;&gt;&lt;/span&gt;&lt;/p&gt;<br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p style=&quot;font-family: Helvetica, Arial, sans-serif;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font-size: 14px; line-height: 16px;&quot;&gt;&lt;span<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class=&quot;txt signature_address-target sig-hide&quot;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style=&quot;display: inline;&quot;&gt;Urząd Miejski w Wołowie&lt;br&gt;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ul. Rynek 34&lt;br&gt;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;56-100 Woł&oacute;w&lt;br&gt;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Polska &lt;/span&gt;&lt;br&gt;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;<br />
          &nbsp;&nbsp;&nbsp;&lt;/table&gt;<br />
          &nbsp;&nbsp;&nbsp;&lt;hr style=&quot; background-color: #247bc0;&quot;&gt;<br />
         &nbsp;&nbsp;&nbsp;&lt;p style=&quot;font-family: Helvetica, Arial, sans-serif;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;font-size: 12px; line-height: 12px;&quot;&gt; This e-mail may<br />
            &nbsp;&nbsp;&nbsp;&nbsp;contain information that is privileged, confidential or<br />
            &nbsp;&nbsp;&nbsp;&nbsp;otherwise protected from disclosure. It must not be used by,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;or its contents copied or disclosed to persons other than<br />
            &nbsp;&nbsp;&nbsp;&nbsp;the intended recipient. &lt;/p&gt;<br />
          &nbsp;&nbsp;&nbsp;&lt;hr style=&quot; background-color: #247bc0;&quot;&gt;&lt;/div&gt;<br />
      &nbsp;&nbsp;&lt;/div&gt;<br />
    &nbsp;&lt;/div&gt;<br />
  &lt;/body&gt;<br />
  &lt;/html&gt;<br />
        </div>
      </code>
    </div>
  </>
  )
}

export default GeneratorCode