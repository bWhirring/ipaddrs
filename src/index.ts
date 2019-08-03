import { networkInterfaces, NetworkInterfaceBase } from 'os';

const nets = networkInterfaces();

let local: NetworkInterfaceBase;

function getLocalAddress() {
  for (let i in nets) {
    const net = nets[i];
    const len = net.length;
    for (let i = 0; i < len; i++) {
      const n = net[i];
      if (n.address !== '127.0.0.1' && n.family === 'IPv4' && !n.internal) {
        local = n;
      }
    }
  }
}

getLocalAddress();

/**
 * ip
 */
const ip = () => local.address;

export const localAddr = local;

export default ip;
