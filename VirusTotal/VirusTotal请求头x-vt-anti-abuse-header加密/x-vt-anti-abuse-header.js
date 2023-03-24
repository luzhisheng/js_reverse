 function computeAntiAbuseHeader(){
    const t = Date.now() / 1e3;
    return btoa(`${(() => {
            const t = 1e10 * (1 + Math.random() % 5e4);
            return t < 50 ? "-1" : t.toFixed(0)
        }
    )()}-ZG9udCBiZSBldmls-${t}`)
}

console.log(computeAntiAbuseHeader());