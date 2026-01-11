const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUyZKjOBD9F13taLNjiKiIQeDyghe8LxN9kEHGskFgSRjjDv97B66qrj7M9NRwEillvqeXL/UD0Ixw7OMK2D9AzsgVCVwvRZVjYANYHA6YgSaIkEDABlWgnk50OwnIDDvFArKWVm2x0m6ciTnvZkpnvXczx5UKRXsBjybIi31Cwj8URKvQKJLAm1senypw3xldHaXLBprnB2p169wGO2u1XZqkV76AR10REUZo3MmPOMUMJT6uAkTYF+n3TbJyz+zUyldofAqNYGaY40w9w0FHYWkfqvOwnEN/tA6/SL9tRXqqV7wyk0URvZYNTz2T/C53T5XsQnfWb0DKE+Knozf6nMQUR/0IU0FE9WXdlWCmT1BksaTjnJfRq6+Nx+Xg0Cg7e730zrvWPN53l7tx+lp+jfgMrieXZMO9gpndom+xmT8s5vsgony1yIfu1lR46ky38NnIX8QD9uGV8//RvdMZzi7aLe/qxtUMzni52F081/KvsTPlizg39NVAfb1E16X0Nfr+MrgvdzvtQgqzu9qt5N02L4c9CuEJXeEaTdRCPcLCmyzLT/pIFOxPLPPbQL6jnZjq2bTszFTIpomzT067YzxN0el8HkyuPVU9ZGOCJuGpgP3MzDaNXsuD416HKq3scG9QI5jP8xF1pxd/q/me8/K80RlX/QjY8qMJGI4JFwwJktE6pjUBiq5zHDIsnuICX98vR0Os0TTjq0U6tcpVO9NGF6m4WuVk6sBWcMs2IpOE9AKaIGdZiDnHUY9wkbFqhDlHMebA/vt7E1B8E29tq8FUuQkOhHGxpEWeZCj66OnHJgrDrKBiXtHQrReYAVv6DGMhCI15rWJBEQuP5IrdIxIc2AeUcPzrfpjh6D32K7vOirBAJOHABu5wMjX9Ua8zrLQT592u04kdN3bAJ9pH095kUUw6irPF0fHVhXPRR+3KiQhsJyVcRNTYDgI6VIp7AYPKefmHIsAGG4MF0+qV51CGiZafijFVu6QfbluqFu03Y/ea6u3hZFzKB7frNiTOs/Bi+VRFGV14rWEjT9ee3/cKKaSttYLcrbuB5UuNFuErCfHvYKWx2c28eNMaBQjd3atemPRGx+WrFUWRuCQmPBxv20htV/t9dSxld1nKxvG4lW8uyd2V48X4xuDIXca7ar/2jLHYQGf6Zqf06WMSARsYSls3db2tW7Jk2LL2F/9W1g1Bef6NYgGagKL6OAgYoSEGTZA88xRJkiRNNS3DaBuSWmfWGx+zkry/UeTpoxqr/j0Q/Bz595L/jf0mS20u6dH8rcj7K/IvkwijQr/3/Y42dYVU+sUiGMW9bXwYhM5S3TVSd6FXFuNmvGjH4PH43gR5gsQhYymwAU/3CDQBy4raqn16yP6A5MJ+34njfn3vBHHhfNp/QVLMBUpzYMum0ZZV3dS1t1MBy/Ie4kdgA3Vm7VQLNEFaOXk+F0h8TBNw6m/SUMDjJ6NTl4tnBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
