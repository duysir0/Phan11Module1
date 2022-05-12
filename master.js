



let n = +prompt(`Nhập số xét từ:`);
let countSNT = 0;
XetvaDemso();

function XetvaDemso() {
    while (countSNT <= 20) {
        let i = 2;
        let SNT = 1;
        if (n == 2) {
            document.write(n + " là số nguyên tố<br>")
            countSNT++;
        } else if (n > 2) {
            while (i < n) {
                if (n % i == 0) {
                    SNT = 0;
                    break; //// nếu ko phải SNT thì bể
                }
                i++;
            }
            if (SNT === 1) {    /// nếu là SNT
                document.write(n + " là số nguyên tố<br>") //thì in n là số ntn
                countSNT++;     /// đếm +1
            }
            n++;
        }
    }}