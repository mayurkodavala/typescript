//typenrrowing
function getchai (kind : string | number) {
    if(kind === 'string') {
        return `making ${kind} chai...`;
    }
    return`chai order : ${kind}`
}
console.log(getchai);

function serveChai (msg? : string) {
    if(msg) {
        return `Serving ${msg}`
    }
    return `Serving default masala chai`;
}
console.log(serveChai);


function orderchai(size: 'small' | 'medium' | 'large') {
        if(size === 'small') {
            return `small cutting chai...`;
        }
        if(size === 'medium' || size === 'large') {
            return `make extra chai`;
        }
        return `chai order ${size}`
}
console.log(orderchai);


class KulhadChai {
    serve() {
        return `Serving Kulhad chai`
    }
}
class CuttingChai {
    serve() {
        return `Serving Cutting chai`
    }
}

function serve(chai : KulhadChai | CuttingChai) {
    if(chai instanceof KulhadChai) {
        return chai.serve();
    }
}

type chaiOrder = {
    type : string
    sugar : number
}

function isChaiOreder(obj : any) : obj is chaiOrder {
    return(
        typeof obj === 'object' && 
        obj != null && 
        typeof obj.type === 'string' &&
        typeof obj.type === 'string'
    )
}

function serveOrder (item : chaiOrder | string) {
    if(isChaiOreder(item)) {
        return `serving ${item.type} chai with ${item}`
    }
}

type MasalaChai = {type : 'masala'; spicelevel : number};
type GingerChai = {type : 'ginger'; amount : number};
type ElaichiChai = {type : 'elaichi'; aroma : number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai (order : Chai) {
    switch (order.type) {
        case 'masala':
            return `Masala Chai`
            break;
        case 'ginger':
            return `Ginger Chai`
            break;
        case 'elaichi':
            return `Elaichi Chai`
            break;
        default:
            break;
    }
}

// function brew (order : MasalaChai | GingerChai) {
//     if("spicelevel" in order) {
//         //
//     }
// }


// function isStingArray (arr : unknown) : arr is string[] {

// }