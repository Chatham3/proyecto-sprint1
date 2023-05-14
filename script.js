const usuarios = [
    {
        id: 1,
        name: "Mónica Múnera",
        tipo: "administrador",
        password: "12345",
    },
    {
        id: 2,
        name: "Marcela Rojas",
        tipo: "administrador",
        password: "12345",
    },
    {
        id: 3,
        name: "Anna Bondarets",
        tipo: "administrador",
        password: "123245",
    },
    {
        id: 4,
        name: "Mónica Múnera",
        tipo: "cliente",
        password: "12345",
    },
    {
        id: 5,
        name: "Marcela Rojas",
        tipo: "cliente",
        password: "12345",
    },
    {
        id: 6,
        name: "Anna Bondarets",
        tipo: "cliente",
        password: "123245",
    },
];

const login = (id, contraseña) => {
    //
}

const verificarDineroEnCajero = () => {
    let hayDineroEnCajero = false;
    for (let i = 0; i < dineroEnCajero.length; i++) {
        const objetoBilletes = dineroEnCajero[i];
        if (objetoBilletes.cantidad > 0) {
            hayDineroEnCajero = true;
            break;
        }
    }

    return hayDineroEnCajero;
}

const devolverDineroCajero = (montoSolicitado) => {
    const montoOriginal = montoSolicitado;
    for (let i = 0; i < dineroEnCajero.length; i++) {
        const objetoBilletes = dineroEnCajero[i];
        if (montoSolicitado === 0) {
            console.log(dineroEnCajero);
            return;
        }

        if (objetoBilletes.cantidad === 0) {
            console.log('Continúo con siguiente denominación');
            continue;
        }

        const billetesAEntregar = calcularBilletesAEntregar(montoSolicitado, objetoBilletes.denominacion, objetoBilletes.cantidad);
        if (billetesAEntregar > 0) {    
            montoSolicitado -= billetesAEntregar * objetoBilletes.denominacion;
            objetoBilletes.cantidad -= billetesAEntregar;
        }

        console.log('Monto restante', montoSolicitado);
        console.log('La denominacion', objetoBilletes.denominacion, 'contiene', objetoBilletes.cantidad, 'billetes');
    };

    console.log(dineroEnCajero);
    if (montoSolicitado > 0){
        console.log('Sólo te pude entregar', montoOriginal - montoSolicitado);
    }
}

const calcularBilletesAEntregar = (montoSolicitado, denominacion, cantidadBilletes) => {
    return Math.min(Math.floor(montoSolicitado / denominacion), cantidadBilletes);
}

const dineroEnCajero = [
    {
        denominacion: 100000,
        cantidad: 0
    },
    {
        denominacion: 50000,
        cantidad: 10
    },
    {
        denominacion: 20000,
        cantidad: 10
    },
    {
        denominacion: 10000,
        cantidad: 10
    },
    {
        denominacion: 5000,
        cantidad: 10
    }
];

if (verificarDineroEnCajero()) {
    devolverDineroCajero(prompt('Ingrese el monto'));
} else {
    alert('No hay :c');
}

