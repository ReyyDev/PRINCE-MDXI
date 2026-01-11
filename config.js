const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBD9l3rVGBEEwYiOWARE8IKooLIxDyUUiHItqlCY6H+fwO6enofd2V6eiqqMkyfznMwfIMvjCi1QAyY/QIHjGhLUHUlTIDABUxqGCIM+CCCBYAJ0Ga7SC6nE3mblUGXD+v7oerI2zt2sxpo7p8Zu4Ih5zd9uL+C1Dwp6TmL/D4DZkXFvheOfY83kWpUbnK+BWCJPWoeLhzlOm7FyoAsnYd3TC3jtEGGM4yzSigtKEYbJAjUbGOOv0Ydr1xunvcBz+J0vqWr40IewUVlXlZ3p+sBzrRm3tpczjvM1+gshLR6hnbjmQJ4u9HCqto0Z7M+htTvKu+WYU2e8Mb6m1K7e6FdxlKHACFBGYtJ8ue+MbC9xQSVFSzINnqh1zIMjd7JH6XLmN2t/kSBbKGvrwDFfI34Q96K3561LeIoC29bLtjqkop5AfT4uy6ks3AVa2NpSmq1+J77BH165/Z++Uz3jh6xNrg2LBrR24XaGt9Qjs1QPz49aS+Vx7JVRNL5pX6Ovik6qaGctKi+t7jnW8jpdiqNSUq9rMvI9/Q7loVn28CCxP+lDQvGfWPqtfpBzrTSnxcWJSGGQDedIx006d801iWU+8I6+4GE/rwe3XJLovFxlqao4i2jzYKzHRhm1F3mL1DEfzNwtNM+BLtsvz4puqDECMBm+9gFGUVwRDEmcZ90dy3B9AIN6h3yMyLO9gAtRMWXvQa+9nszFHjHp8Ha+7yt6C/fS48BfU6gKp9mA3qMX0AcFzn1UVSiYxxXJcbNCVQUjVIHJ39/7IEMP8iZcl44b9kEY44o4GS2SHAYfqn48Qt/PaUZ2TeYr3QFhMGE+rxEhcRZVXR9pBrF/iWukXCCpwCSESYV+VYgwCsCEYIp+Ta2SB13j2a2uDyVrB/ogfQoSB2ACBFbkxzwv8tKQESZD7q/q273DhUXxLUME9EHyjGMZhmFG3FgSBFFguC6ye+iDDHZo4HDJu46/8+3gA0RgnFRgApQVtDnsK9qKDa9VpeuyFslKJIPP+j6M8ibECO/3kVy2o17Kh2jli8sCCb3YS9KTUoxW63sq2xf3NMWN8fIPIGAC8lW7ca15a9wN+1IPd6YaszZ/soJm0RMz3i71o0uXlnvl15U1z86uOTWs45pPzlfhOlNuuhZEo8I33WMpbucWLxKsT6OXLluA6thHvyejdXQ7ar2Wpq6/rEfDzGlGJ4IGKEpSlb2x60VvbdBB2e5mV0IWbe3VxRL51M630moNNSVYpR68LeMNhck4HOL1oVTubxZ+jlDyvrrip7k65brfMEbPTfCuwH8r+ca8cxzz2v8N5H25/MuATtGCYUbyouptCnrkrvONIhxpnaeel8olUlXfjDTDPchQjMHr6/c+KBJIwhyn3e7PApw/fYJz2lnYyML8D8mUqWHIUWR0pSewIvLnWOzjFFUEpgWYDMeCOORYXhDeojY4L+awunQzvJU8Tuo83shFsSOQfEwZkLtP51jw+hMsHcF2gQcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
