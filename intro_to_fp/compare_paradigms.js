// Directions: Rewrite the imperative code below as Object-Oriented
function StatusReport(status, warp, type, recipient) {
    this.status = status;
    this.warp = warp;
    this.type = type;
    if (status === 'active' && warp <= 4) {
        this.report = recipient +=
            'the engines are active and we could be going faster.';
    }
    if (status === 'active' && warp > 4) {
        this.report = recipient += `the engines are active and we are going ${warp}.`;
    }
    if (status === 'down') {
        this.report = recipient += 'the engines are down.';
    }
    this.report = recipient +=
        'the comms are down and we can`t reach engineering.';
}

const today = new StatusReport('active', 2, 'Dilithium Crystal', 'Captain, ');
console.log(today);
