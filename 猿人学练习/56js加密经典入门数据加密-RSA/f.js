var JSEncryptExports = {};

(function (p) {
    function n(nj, nO, nt) {
        if (null != nj) {
            "number" == typeof nj ? this.fromNumber(nj, nO, nt) : null == nO && "string" != typeof nj ? this.fromString(nj, 256) : this.fromString(nj, nO);
        }
    }

    function c() {
        return new n(null);
    }

    function a(nj, nO, nt, nX, nG, nx) {
        for (; --nx >= 0;) {
            var nN = nO * this[nj++] + nt[nX] + nG;
            nG = Math.floor(nN / 67108864);
            nt[nX++] = 67108863 & nN;
        }

        return nG;
    }

    function A(nj, nO, nt, nX, nG, nx) {
        for (var nN = 32767 & nO, nD = nO >> 15; --nx >= 0;) {
            var ny = 32767 & this[nj];
            var no = this[nj++] >> 15;
            var nv = nD * ny + no * nN;
            ny = nN * ny + ((32767 & nv) << 15) + nt[nX] + (1073741823 & nG);
            nG = (ny >>> 30) + (nv >>> 15) + nD * no + (nG >>> 30);
            nt[nX++] = 1073741823 & ny;
        }

        return nG;
    }

    function g(nj, nO, nt, nX, nG, nx) {
        for (var nN = 16383 & nO, nD = nO >> 14; --nx >= 0;) {
            var ny = 16383 & this[nj];
            var no = this[nj++] >> 14;
            var nv = nD * ny + no * nN;
            ny = nN * ny + ((16383 & nv) << 14) + nt[nX] + nG;
            nG = (ny >> 28) + (nv >> 14) + nD * no;
            nt[nX++] = 268435455 & ny;
        }

        return nG;
    }

    function S(nj) {
        return nW.charAt(nj);
    }

    function f(nj, nO) {
        var nt = nl[nj.charCodeAt(nO)];
        return null == nt ? -1 : nt;
    }

    function Y(nj) {
        for (var nO = this.t - 1; nO >= 0; --nO) nj[nO] = this[nO];

        nj.t = this.t;
        nj.s = this.s;
    }

    function J(nj) {
        this.t = 1;
        0 > nj ? this.s = -1 : this.s = 0;
        nj > 0 ? this[0] = nj : -1 > nj ? this[0] = nj + DV : this.t = 0;
    }

    function b(nj) {
        var nO = c();
        return nO.fromInt(nj), nO;
    }

    function C(nj, nO) {
        var nt;
        if (16 == nO) nt = 4;else {
            if (8 == nO) nt = 3;else {
                if (256 == nO) nt = 8;else {
                    if (2 == nO) nt = 1;else {
                        if (32 == nO) nt = 5;else {
                            if (4 != nO) return void this.fromRadix(nj, nO);
                            nt = 2;
                        }
                    }
                }
            }
        }
        this.t = 0;
        this.s = 0;

        for (var nX = nj.length, nG = !1, nx = 0; --nX >= 0;) {
            if (8 == nt) {
                var nN = 255 & nj[nX];
            } else {
                var nN = f(nj, nX);
            }

            if (0 > nN) {
                if ("-" == nj.charAt(nX)) {
                    nG = !0;
                }
            } else {
                nG = !1;
                0 == nx ? this[this.t++] = nN : nx + nt > this.DB ? (this[this.t - 1] |= (nN & (1 << this.DB - nx) - 1) << nx, this[this.t++] = nN >> this.DB - nx) : this[this.t - 1] |= nN << nx;
                nx += nt;
                nx >= this.DB && (nx -= this.DB);
            }
        }

        8 == nt && 0 != (128 & nj[0]) && (this.s = -1, nx > 0 && (this[this.t - 1] |= (1 << this.DB - nx) - 1 << nx));
        this.clamp();
        nG && n.ZERO.subTo(this, this);
    }

    function V() {
        for (var nj = this.s & this.DM; this.t > 0 && this[this.t - 1] == nj;) --this.t;
    }

    function W(nj) {
        if (this.s < 0) return "-" + this.negate().toString(nj);
        var nO;
        if (16 == nj) nO = 4;else {
            if (8 == nj) nO = 3;else {
                if (2 == nj) nO = 1;else {
                    if (32 == nj) nO = 5;else {
                        if (4 != nj) return this.toRadix(nj);
                        nO = 2;
                    }
                }
            }
        }
        var nt;
        var nX = (1 << nO) - 1;
        var nG = !1;
        var nx = "";
        var nN = this.t;
        var nD = this.DB - nN * this.DB % nO;

        if (nN-- > 0) {
            for (nD < this.DB && (nt = this[nN] >> nD) > 0 && (nG = !0, nx = S(nt)); nN >= 0;) {
                nO > nD ? (nt = (this[nN] & (1 << nD) - 1) << nO - nD, nt |= this[--nN] >> (nD += this.DB - nO)) : (nt = this[nN] >> (nD -= nO) & nX, 0 >= nD && (nD += this.DB, --nN));
                nt > 0 && (nG = !0);
                nG && (nx += S(nt));
            }
        }

        return nG ? nx : "0";
    }

    function l() {
        var nj = c();
        return n.ZERO.subTo(this, nj), nj;
    }

    function R() {
        return this.s < 0 ? this.negate() : this;
    }

    function B(nj) {
        var nO = this.s - nj.s;
        if (0 != nO) return nO;
        var nt = this.t;
        if (nO = nt - nj.t, 0 != nO) return this.s < 0 ? -nO : nO;

        for (; --nt >= 0;) if (0 != (nO = this[nt] - nj[nt])) return nO;

        return 0;
    }

    function F(nj) {
        var nO;
        var nt = 1;
        return 0 != (nO = nj >>> 16) && (nj = nO, nt += 16), 0 != (nO = nj >> 8) && (nj = nO, nt += 8), 0 != (nO = nj >> 4) && (nj = nO, nt += 4), 0 != (nO = nj >> 2) && (nj = nO, nt += 2), 0 != (nO = nj >> 1) && (nj = nO, nt += 1), nt;
    }

    function E() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + F(this[this.t - 1] ^ this.s & this.DM);
    }

    function s(nj, nO) {
        var nt;

        for (nt = this.t - 1; nt >= 0; --nt) nO[nt + nj] = this[nt];

        for (nt = nj - 1; nt >= 0; --nt) nO[nt] = 0;

        nO.t = this.t + nj;
        nO.s = this.s;
    }

    function I(nj, nO) {
        for (var nt = nj; nt < this.t; ++nt) nO[nt - nj] = this[nt];

        nO.t = Math.max(this.t - nj, 0);
        nO.s = this.s;
    }

    function K(nj, nO) {
        var nt;
        var nX = nj % this.DB;
        var nG = this.DB - nX;
        var nx = (1 << nG) - 1;
        var nN = Math.floor(nj / this.DB);
        var nD = this.s << nX & this.DM;

        for (nt = this.t - 1; nt >= 0; --nt) {
            nO[nt + nN + 1] = this[nt] >> nG | nD;
            nD = (this[nt] & nx) << nX;
        }

        for (nt = nN - 1; nt >= 0; --nt) nO[nt] = 0;

        nO[nN] = nD;
        nO.t = this.t + nN + 1;
        nO.s = this.s;
        nO.clamp();
    }

    function T(nj, nO) {
        nO.s = this.s;
        var nt = Math.floor(nj / this.DB);
        if (nt >= this.t) return void (nO.t = 0);
        var nX = nj % this.DB;
        var nG = this.DB - nX;
        var nx = (1 << nX) - 1;
        nO[0] = this[nt] >> nX;

        for (var nN = nt + 1; nN < this.t; ++nN) {
            nO[nN - nt - 1] |= (this[nN] & nx) << nG;
            nO[nN - nt] = this[nN] >> nX;
        }

        nX > 0 && (nO[this.t - nt - 1] |= (this.s & nx) << nG);
        nO.t = this.t - nt;
        nO.clamp();
    }

    function i(nj, nO) {
        for (var nt = 0, nX = 0, nG = Math.min(nj.t, this.t); nG > nt;) {
            nX += this[nt] - nj[nt];
            nO[nt++] = nX & this.DM;
            nX >>= this.DB;
        }

        if (nj.t < this.t) {
            for (nX -= nj.s; nt < this.t;) {
                nX += this[nt];
                nO[nt++] = nX & this.DM;
                nX >>= this.DB;
            }

            nX += this.s;
        } else {
            for (nX += this.s; nt < nj.t;) {
                nX -= nj[nt];
                nO[nt++] = nX & this.DM;
                nX >>= this.DB;
            }

            nX -= nj.s;
        }

        0 > nX ? nO.s = -1 : nO.s = 0;
        -1 > nX ? nO[nt++] = this.DV + nX : nX > 0 && (nO[nt++] = nX);
        nO.t = nt;
        nO.clamp();
    }

    function e(nj, nO) {
        var nt = this.abs();
        var nX = nj.abs();
        var nG = nt.t;

        for (nO.t = nG + nX.t; --nG >= 0;) nO[nG] = 0;

        for (nG = 0; nG < nX.t; ++nG) nO[nG + nt.t] = nt.am(0, nX[nG], nO, nG, 0, nt.t);

        nO.s = 0;
        nO.clamp();
        this.s != nj.s && n.ZERO.subTo(nO, nO);
    }

    function Z(nj) {
        for (var nO = this.abs(), nt = nj.t = 2 * nO.t; --nt >= 0;) nj[nt] = 0;

        for (nt = 0; nt < nO.t - 1; ++nt) {
            var nX = nO.am(nt, nO[nt], nj, 2 * nt, 0, 1);

            if ((nj[nt + nO.t] += nO.am(nt + 1, 2 * nO[nt], nj, 2 * nt + 1, nX, nO.t - nt - 1)) >= nO.DV) {
                nj[nt + nO.t] -= nO.DV;
                nj[nt + nO.t + 1] = 1;
            }
        }

        nj.t > 0 && (nj[nj.t - 1] += nO.am(nt, nO[nt], nj, 2 * nt, 0, 1));
        nj.s = 0;
        nj.clamp();
    }

    function w(nj, nO, nt) {
        var nX = nj.abs();

        if (!(nX.t <= 0)) {
            var nG = this.abs();
            if (nG.t < nX.t) return null != nO && nO.fromInt(0), void (null != nt && this.copyTo(nt));

            if (null == nt) {
                nt = c();
            }

            var nx = c();
            var nN = this.s;
            var nD = nj.s;
            var ny = this.DB - F(nX[nX.t - 1]);

            if (ny > 0) {
                nX.lShiftTo(ny, nx);
                nG.lShiftTo(ny, nt);
            } else {
                nX.copyTo(nx);
                nG.copyTo(nt);
            }

            var no = nx.t;
            var nv = nx[no - 1];

            if (0 != nv) {
                var nm = nv * (1 << this.F1) + (no > 1 ? nx[no - 2] >> this.F2 : 0);
                var nd = this.FV / nm;
                var nr = (1 << this.F1) / nm;
                var nQ = 1 << this.F2;
                var nP = nt.t;
                var c0 = nP - no;

                if (null == nO) {
                    var c1 = c();
                } else {
                    var c1 = nO;
                }

                for (nx.dlShiftTo(c0, c1), nt.compareTo(c1) >= 0 && (nt[nt.t++] = 1, nt.subTo(c1, nt)), n.ONE.dlShiftTo(no, c1), c1.subTo(nx, nx); nx.t < no;) nx[nx.t++] = 0;

                for (; --c0 >= 0;) {
                    var c2 = nt[--nP] == nv ? this.DM : Math.floor(nt[nP] * nd + (nt[nP - 1] + nQ) * nr);

                    if ((nt[nP] += nx.am(0, c2, nt, c0, 0, no)) < c2) {
                        for (nx.dlShiftTo(c0, c1), nt.subTo(c1, nt); nt[nP] < --c2;) nt.subTo(c1, nt);
                    }
                }

                null != nO && (nt.drShiftTo(no, nO), nN != nD && n.ZERO.subTo(nO, nO));
                nt.t = no;
                nt.clamp();
                ny > 0 && nt.rShiftTo(ny, nt);
                0 > nN && n.ZERO.subTo(nt, nt);
            }
        }
    }

    function M(nj) {
        var nO = c();
        return this.abs().divRemTo(nj, null, nO), this.s < 0 && nO.compareTo(n.ZERO) > 0 && nj.subTo(nO, nO), nO;
    }

    function u(nj) {
        this.m = nj;
    }

    function k(nj) {
        return nj.s < 0 || nj.compareTo(this.m) >= 0 ? nj.mod(this.m) : nj;
    }

    function q(nj) {
        return nj;
    }

    function U(nj) {
        nj.divRemTo(this.m, null, nj);
    }

    function h(nj, nO, nt) {
        nj.multiplyTo(nO, nt);
        this.reduce(nt);
    }

    function H(nj, nO) {
        nj.squareTo(nO);
        this.reduce(nO);
    }

    function j() {
        if (this.t < 1) return 0;
        var nj = this[0];
        if (0 == (1 & nj)) return 0;
        var nO = 3 & nj;
        return nO = nO * (2 - (15 & nj) * nO) & 15, nO = nO * (2 - (255 & nj) * nO) & 255, nO = nO * (2 - ((65535 & nj) * nO & 65535)) & 65535, nO = nO * (2 - nj * nO % this.DV) % this.DV, nO > 0 ? this.DV - nO : -nO;
    }

    function O(nj) {
        this.m = nj;
        this.mp = nj.invDigit();
        this.mpl = 32767 & this.mp;
        this.mph = this.mp >> 15;
        this.um = (1 << nj.DB - 15) - 1;
        this.mt2 = 2 * nj.t;
    }

    function X(nj) {
        var nO = c();
        return nj.abs().dlShiftTo(this.m.t, nO), nO.divRemTo(this.m, null, nO), nj.s < 0 && nO.compareTo(n.ZERO) > 0 && this.m.subTo(nO, nO), nO;
    }

    function G(nj) {
        var nO = c();
        return nj.copyTo(nO), this.reduce(nO), nO;
    }

    function x(nj) {
        for (; nj.t <= this.mt2;) nj[nj.t++] = 0;

        for (var nO = 0; nO < this.m.t; ++nO) {
            var nt = 32767 & nj[nO];
            var nX = nt * this.mpl + ((nt * this.mph + (nj[nO] >> 15) * this.mpl & this.um) << 15) & nj.DM;

            for (nt = nO + this.m.t, nj[nt] += this.m.am(0, nX, nj, nO, 0, this.m.t); nj[nt] >= nj.DV;) {
                nj[nt] -= nj.DV;
                nj[++nt]++;
            }
        }

        nj.clamp();
        nj.drShiftTo(this.m.t, nj);
        nj.compareTo(this.m) >= 0 && nj.subTo(this.m, nj);
    }

    function N(nj, nO) {
        nj.squareTo(nO);
        this.reduce(nO);
    }

    function D(nj, nO, nt) {
        nj.multiplyTo(nO, nt);
        this.reduce(nt);
    }

    function y() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
    }

    function o(nj, nO) {
        if (nj > 4294967295 || 1 > nj) return n.ONE;
        var nt = c();
        var nX = c();
        var nG = nO.convert(this);
        var nx = F(nj) - 1;

        for (nG.copyTo(nt); --nx >= 0;) if (nO.sqrTo(nt, nX), (nj & 1 << nx) > 0) nO.mulTo(nX, nG, nt);else {
            var nN = nt;
            nt = nX;
            nX = nN;
        }

        return nO.revert(nt);
    }

    function v(nj, nO) {
        var nt;
        return 256 > nj || nO.isEven() ? nt = new u(nO) : nt = new O(nO), this.exp(nj, nt);
    }

    function m() {
        var nj = c();
        return this.copyTo(nj), nj;
    }

    function d() {
        if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1;
        } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0;
        }

        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }

    function r() {
        return 0 == this.t ? this.s : this[0] << 24 >> 24;
    }

    function Q() {
        return 0 == this.t ? this.s : this[0] << 16 >> 16;
    }

    function P(nj) {
        return Math.floor(Math.LN2 * this.DB / Math.log(nj));
    }

    function p0() {
        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
    }

    function p1(nj) {
        if (null == nj && (nj = 10), 0 == this.signum() || 2 > nj || nj > 36) return "0";
        var nO = this.chunkSize(nj);
        var nt = Math.pow(nj, nO);
        var nX = b(nt);
        var nG = c();
        var nx = c();
        var nN = "";

        for (this.divRemTo(nX, nG, nx); nG.signum() > 0;) {
            nN = (nt + nx.intValue()).toString(nj).substr(1) + nN;
            nG.divRemTo(nX, nG, nx);
        }

        return nx.intValue().toString(nj) + nN;
    }

    function p2(nj, nO) {
        this.fromInt(0);
        null == nO && (nO = 10);

        for (var nt = this.chunkSize(nO), nX = Math.pow(nO, nt), nG = !1, nx = 0, nN = 0, nD = 0; nD < nj.length; ++nD) {
            var ny = f(nj, nD);

            if (0 > ny) {
                if ("-" == nj.charAt(nD) && 0 == this.signum()) {
                    nG = !0;
                }
            } else {
                nN = nO * nN + ny;
                ++nx >= nt && (this.dMultiply(nX), this.dAddOffset(nN, 0), nx = 0, nN = 0);
            }
        }

        nx > 0 && (this.dMultiply(Math.pow(nO, nx)), this.dAddOffset(nN, 0));
        nG && n.ZERO.subTo(this, this);
    }

    function p3(nj, nO, nt) {
        if ("number" == typeof nO) {
            if (2 > nj) this.fromInt(1);else {
                for (this.fromNumber(nj, nt), this.testBit(nj - 1) || this.bitwiseTo(n.ONE.shiftLeft(nj - 1), pn, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(nO);) {
                    this.dAddOffset(2, 0);
                    this.bitLength() > nj && this.subTo(n.ONE.shiftLeft(nj - 1), this);
                }
            }
        } else {
            var nX = new Array();
            var nG = 7 & nj;
            nX.length = (nj >> 3) + 1;
            nO.nextBytes(nX);
            nG > 0 ? nX[0] &= (1 << nG) - 1 : nX[0] = 0;
            this.fromString(nX, 256);
        }
    }

    function p4() {
        var nj = this.t;
        var nO = new Array();
        nO[0] = this.s;
        var nt;
        var nX = this.DB - nj * this.DB % 8;
        var nG = 0;

        if (nj-- > 0) {
            for (nX < this.DB && (nt = this[nj] >> nX) != (this.s & this.DM) >> nX && (nO[nG++] = nt | this.s << this.DB - nX); nj >= 0;) {
                8 > nX ? (nt = (this[nj] & (1 << nX) - 1) << 8 - nX, nt |= this[--nj] >> (nX += this.DB - 8)) : (nt = this[nj] >> (nX -= 8) & 255, 0 >= nX && (nX += this.DB, --nj));
                0 != (128 & nt) && (nt |= -256);
                0 == nG && (128 & this.s) != (128 & nt) && ++nG;
                (nG > 0 || nt != this.s) && (nO[nG++] = nt);
            }
        }

        return nO;
    }

    function p5(nj) {
        return 0 == this.compareTo(nj);
    }

    function p6(nj) {
        return this.compareTo(nj) < 0 ? this : nj;
    }

    function p7(nj) {
        return this.compareTo(nj) > 0 ? this : nj;
    }

    function p8(nj, nO, nt) {
        var nX;
        var nG;
        var nx = Math.min(nj.t, this.t);

        for (nX = 0; nx > nX; ++nX) nt[nX] = nO(this[nX], nj[nX]);

        if (nj.t < this.t) {
            for (nG = nj.s & this.DM, nX = nx; nX < this.t; ++nX) nt[nX] = nO(this[nX], nG);

            nt.t = this.t;
        } else {
            for (nG = this.s & this.DM, nX = nx; nX < nj.t; ++nX) nt[nX] = nO(nG, nj[nX]);

            nt.t = nj.t;
        }

        nt.s = nO(this.s, nj.s);
        nt.clamp();
    }

    function p9(nj, nO) {
        return nj & nO;
    }

    function pp(nj) {
        var nO = c();
        return this.bitwiseTo(nj, p9, nO), nO;
    }

    function pn(nj, nO) {
        return nj | nO;
    }

    function pc(nj) {
        var nO = c();
        return this.bitwiseTo(nj, pn, nO), nO;
    }

    function pa(nj, nO) {
        return nj ^ nO;
    }

    function pA(nj) {
        var nO = c();
        return this.bitwiseTo(nj, pa, nO), nO;
    }

    function pL(nj, nO) {
        return nj & ~nO;
    }

    function pg(nj) {
        var nO = c();
        return this.bitwiseTo(nj, pL, nO), nO;
    }

    function pS() {
        for (var nj = c(), nO = 0; nO < this.t; ++nO) nj[nO] = this.DM & ~this[nO];

        return nj.t = this.t, nj.s = ~this.s, nj;
    }

    function pf(nj) {
        var nO = c();
        return 0 > nj ? this.rShiftTo(-nj, nO) : this.lShiftTo(nj, nO), nO;
    }

    function pY(nj) {
        var nO = c();
        return 0 > nj ? this.lShiftTo(-nj, nO) : this.rShiftTo(nj, nO), nO;
    }

    function pJ(nj) {
        if (0 == nj) return -1;
        var nO = 0;
        return 0 == (65535 & nj) && (nj >>= 16, nO += 16), 0 == (255 & nj) && (nj >>= 8, nO += 8), 0 == (15 & nj) && (nj >>= 4, nO += 4), 0 == (3 & nj) && (nj >>= 2, nO += 2), 0 == (1 & nj) && ++nO, nO;
    }

    function pb() {
        for (var nj = 0; nj < this.t; ++nj) if (0 != this[nj]) return nj * this.DB + pJ(this[nj]);

        return this.s < 0 ? this.t * this.DB : -1;
    }

    function pC(nj) {
        for (var nO = 0; 0 != nj;) {
            nj &= nj - 1;
            ++nO;
        }

        return nO;
    }

    function pV() {
        for (var nj = 0, nO = this.s & this.DM, nt = 0; nt < this.t; ++nt) nj += pC(this[nt] ^ nO);

        return nj;
    }

    function pW(nj) {
        var nO = Math.floor(nj / this.DB);
        return nO >= this.t ? 0 != this.s : 0 != (this[nO] & 1 << nj % this.DB);
    }

    function pl(nj, nO) {
        var nt = n.ONE.shiftLeft(nj);
        return this.bitwiseTo(nt, nO, nt), nt;
    }

    function pR(nj) {
        return this.changeBit(nj, pn);
    }

    function pB(nj) {
        return this.changeBit(nj, pL);
    }

    function pF(nj) {
        return this.changeBit(nj, pa);
    }

    function pE(nj, nO) {
        for (var nt = 0, nX = 0, nG = Math.min(nj.t, this.t); nG > nt;) {
            nX += this[nt] + nj[nt];
            nO[nt++] = nX & this.DM;
            nX >>= this.DB;
        }

        if (nj.t < this.t) {
            for (nX += nj.s; nt < this.t;) {
                nX += this[nt];
                nO[nt++] = nX & this.DM;
                nX >>= this.DB;
            }

            nX += this.s;
        } else {
            for (nX += this.s; nt < nj.t;) {
                nX += nj[nt];
                nO[nt++] = nX & this.DM;
                nX >>= this.DB;
            }

            nX += nj.s;
        }

        0 > nX ? nO.s = -1 : nO.s = 0;
        nX > 0 ? nO[nt++] = nX : -1 > nX && (nO[nt++] = this.DV + nX);
        nO.t = nt;
        nO.clamp();
    }

    function ps(nj) {
        var nO = c();
        return this.addTo(nj, nO), nO;
    }

    function pI(nj) {
        var nO = c();
        return this.subTo(nj, nO), nO;
    }

    function pK(nj) {
        var nO = c();
        return this.multiplyTo(nj, nO), nO;
    }

    function pT() {
        var nj = c();
        return this.squareTo(nj), nj;
    }

    function pi(nj) {
        var nO = c();
        return this.divRemTo(nj, nO, null), nO;
    }

    function pe(nj) {
        var nO = c();
        return this.divRemTo(nj, null, nO), nO;
    }

    function pZ(nj) {
        var nO = c();
        var nt = c();
        return this.divRemTo(nj, nO, nt), new Array(nO, nt);
    }

    function pw(nj) {
        this[this.t] = this.am(0, nj - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp();
    }

    function pM(nj, nO) {
        if (0 != nj) {
            for (; this.t <= nO;) this[this.t++] = 0;

            for (this[nO] += nj; this[nO] >= this.DV;) {
                this[nO] -= this.DV;
                ++nO >= this.t && (this[this.t++] = 0);
                ++this[nO];
            }
        }
    }

    function pu() {}

    function pk(nj) {
        return nj;
    }

    function pq(nj, nO, nt) {
        nj.multiplyTo(nO, nt);
    }

    function pU(nj, nO) {
        nj.squareTo(nO);
    }

    function pz(nj) {
        return this.exp(nj, new pu());
    }

    function ph(nj, nO, nt) {
        var nX = Math.min(this.t + nj.t, nO);

        for (nt.s = 0, nt.t = nX; nX > 0;) nt[--nX] = 0;

        var nG;

        for (nG = nt.t - this.t; nG > nX; ++nX) nt[nX + this.t] = this.am(0, nj[nX], nt, nX, 0, this.t);

        for (nG = Math.min(nj.t, nO); nG > nX; ++nX) this.am(0, nj[nX], nt, nX, 0, nO - nX);

        nt.clamp();
    }

    function pH(nj, nO, nt) {
        --nO;
        var nX = nt.t = this.t + nj.t - nO;

        for (nt.s = 0; --nX >= 0;) nt[nX] = 0;

        for (nX = Math.max(nO - this.t, 0); nX < nj.t; ++nX) nt[this.t + nX - nO] = this.am(nO - nX, nj[nX], nt, 0, 0, this.t + nX - nO);

        nt.clamp();
        nt.drShiftTo(1, nt);
    }

    function pj(nj) {
        this.r2 = c();
        this.q3 = c();
        n.ONE.dlShiftTo(2 * nj.t, this.r2);
        this.mu = this.r2.divide(nj);
        this.m = nj;
    }

    function pO(nj) {
        if (nj.s < 0 || nj.t > 2 * this.m.t) return nj.mod(this.m);
        if (nj.compareTo(this.m) < 0) return nj;
        var nO = c();
        return nj.copyTo(nO), this.reduce(nO), nO;
    }

    function pt(nj) {
        return nj;
    }

    function pX(nj) {
        for (nj.drShiftTo(this.m.t - 1, this.r2), nj.t > this.m.t + 1 && (nj.t = this.m.t + 1, nj.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); nj.compareTo(this.r2) < 0;) nj.dAddOffset(1, this.m.t + 1);

        for (nj.subTo(this.r2, nj); nj.compareTo(this.m) >= 0;) nj.subTo(this.m, nj);
    }

    function pG(nj, nO) {
        nj.squareTo(nO);
        this.reduce(nO);
    }

    function px(nj, nO, nt) {
        nj.multiplyTo(nO, nt);
        this.reduce(nt);
    }

    function pN(nj, nO) {
        var nt;
        var nX;
        var nG = nj.bitLength();
        var nx = b(1);
        if (0 >= nG) return nx;
        18 > nG ? nt = 1 : 48 > nG ? nt = 3 : 144 > nG ? nt = 4 : 768 > nG ? nt = 5 : nt = 6;
        8 > nG ? nX = new u(nO) : nO.isEven() ? nX = new pj(nO) : nX = new O(nO);
        var nN = new Array();
        var nD = 3;
        var ny = nt - 1;
        var no = (1 << nt) - 1;

        if (nN[1] = nX.convert(this), nt > 1) {
            var nv = c();

            for (nX.sqrTo(nN[1], nv); no >= nD;) {
                nN[nD] = c();
                nX.mulTo(nv, nN[nD - 2], nN[nD]);
                nD += 2;
            }
        }

        var nm;
        var nd;
        var nr = nj.t - 1;
        var nQ = !0;
        var nP = c();

        for (nG = F(nj[nr]) - 1; nr >= 0;) {
            for (nG >= ny ? nm = nj[nr] >> nG - ny & no : (nm = (nj[nr] & (1 << nG + 1) - 1) << ny - nG, nr > 0 && (nm |= nj[nr - 1] >> this.DB + nG - ny)), nD = nt; 0 == (1 & nm);) {
                nm >>= 1;
                --nD;
            }

            if ((nG -= nD) < 0 && (nG += this.DB, --nr), nQ) {
                nN[nm].copyTo(nx);
                nQ = !1;
            } else {
                for (; nD > 1;) {
                    nX.sqrTo(nx, nP);
                    nX.sqrTo(nP, nx);
                    nD -= 2;
                }

                nD > 0 ? nX.sqrTo(nx, nP) : (nd = nx, nx = nP, nP = nd);
                nX.mulTo(nP, nN[nm], nx);
            }

            for (; nr >= 0 && 0 == (nj[nr] & 1 << nG);) {
                nX.sqrTo(nx, nP);
                nd = nx;
                nx = nP;
                nP = nd;
                --nG < 0 && (nG = this.DB - 1, --nr);
            }
        }

        return nX.revert(nx);
    }

    function pD(nj) {
        if (this.s < 0) {
            var nO = this.negate();
        } else {
            var nO = this.clone();
        }

        if (nj.s < 0) {
            var nt = nj.negate();
        } else {
            var nt = nj.clone();
        }

        if (nO.compareTo(nt) < 0) {
            var nX = nO;
            nO = nt;
            nt = nX;
        }

        var nG = nO.getLowestSetBit();
        var nx = nt.getLowestSetBit();
        if (0 > nx) return nO;

        for (nx > nG && (nx = nG), nx > 0 && (nO.rShiftTo(nx, nO), nt.rShiftTo(nx, nt)); nO.signum() > 0;) {
            (nG = nO.getLowestSetBit()) > 0 && nO.rShiftTo(nG, nO);
            (nG = nt.getLowestSetBit()) > 0 && nt.rShiftTo(nG, nt);
            nO.compareTo(nt) >= 0 ? (nO.subTo(nt, nO), nO.rShiftTo(1, nO)) : (nt.subTo(nO, nt), nt.rShiftTo(1, nt));
        }

        return nx > 0 && nt.lShiftTo(nx, nt), nt;
    }

    function py(nj) {
        if (0 >= nj) return 0;
        var nO = this.DV % nj;

        if (this.s < 0) {
            var nt = nj - 1;
        } else {
            var nt = 0;
        }

        if (this.t > 0) {
            if (0 == nO) nt = this[0] % nj;else {
                for (var nX = this.t - 1; nX >= 0; --nX) nt = (nO * nt + this[nX]) % nj;
            }
        }

        return nt;
    }

    function po(nj) {
        var nO = nj.isEven();
        if (this.isEven() && nO || 0 == nj.signum()) return n.ZERO;

        for (var nt = nj.clone(), nX = this.clone(), nG = b(1), nx = b(0), nN = b(0), nD = b(1); 0 != nt.signum();) {
            for (; nt.isEven();) {
                nt.rShiftTo(1, nt);
                nO ? (nG.isEven() && nx.isEven() || (nG.addTo(this, nG), nx.subTo(nj, nx)), nG.rShiftTo(1, nG)) : nx.isEven() || nx.subTo(nj, nx);
                nx.rShiftTo(1, nx);
            }

            for (; nX.isEven();) {
                nX.rShiftTo(1, nX);
                nO ? (nN.isEven() && nD.isEven() || (nN.addTo(this, nN), nD.subTo(nj, nD)), nN.rShiftTo(1, nN)) : nD.isEven() || nD.subTo(nj, nD);
                nD.rShiftTo(1, nD);
            }

            if (nt.compareTo(nX) >= 0) {
                nt.subTo(nX, nt);
                nO && nG.subTo(nN, nG);
                nx.subTo(nD, nx);
            } else {
                nX.subTo(nt, nX);
                nO && nN.subTo(nG, nN);
                nD.subTo(nx, nD);
            }
        }

        return 0 != nX.compareTo(n.ONE) ? n.ZERO : nD.compareTo(nj) >= 0 ? nD.subtract(nj) : nD.signum() < 0 ? (nD.addTo(nj, nD), nD.signum() < 0 ? nD.add(nj) : nD) : nD;
    }

    function pv(nj) {
        var nO;
        var nt = this.abs();

        if (1 == nt.t && nt[0] <= nF[nF.length - 1]) {
            for (nO = 0; nO < nF.length; ++nO) if (nt[0] == nF[nO]) return !0;

            return !1;
        }

        if (nt.isEven()) return !1;

        for (nO = 1; nO < nF.length;) {
            for (var nX = nF[nO], nG = nO + 1; nG < nF.length && nE > nX;) nX *= nF[nG++];

            for (nX = nt.modInt(nX); nG > nO;) if (nX % nF[nO++] == 0) return !1;
        }

        return nt.millerRabin(nj);
    }

    function pm(nj) {
        var nO = this.subtract(n.ONE);
        var nt = nO.getLowestSetBit();
        if (0 >= nt) return !1;
        var nX = nO.shiftRight(nt);
        nj = nj + 1 >> 1;
        nj > nF.length && (nj = nF.length);

        for (var nG = c(), nx = 0; nj > nx; ++nx) {
            nG.fromInt(nF[Math.floor(Math.random() * nF.length)]);
            var nN = nG.modPow(nX, this);

            if (0 != nN.compareTo(n.ONE) && 0 != nN.compareTo(nO)) {
                for (var nD = 1; nD++ < nt && 0 != nN.compareTo(nO);) if (nN = nN.modPowInt(2, this), 0 == nN.compareTo(n.ONE)) return !1;

                if (0 != nN.compareTo(nO)) return !1;
            }
        }

        return !0;
    }

    function pd() {
        this.i = 0;
        this.j = 0;
        this.S = new Array();
    }

    function pr(nj) {
        var nO;
        var nt;
        var nX;

        for (nO = 0; 256 > nO; ++nO) this.S[nO] = nO;

        for (nt = 0, nO = 0; 256 > nO; ++nO) {
            nt = nt + this.S[nO] + nj[nO % nj.length] & 255;
            nX = this.S[nO];
            this.S[nO] = this.S[nt];
            this.S[nt] = nX;
        }

        this.i = 0;
        this.j = 0;
    }

    function pQ() {
        var nj;
        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, nj = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = nj, this.S[nj + this.S[this.i] & 255];
    }

    function pP() {
        return new pd();
    }

    function n0() {
        if (null == nI) {
            for (nI = pP(); ns > nT;) {
                var nj = Math.floor(65536 * Math.random());
                nK[nT++] = 255 & nj;
            }

            for (nI.init(nK), nT = 0; nT < nK.length; ++nT) nK[nT] = 0;

            nT = 0;
        }

        return nI.next();
    }

    function n1(nj) {
        var nO;

        for (nO = 0; nO < nj.length; ++nO) nj[nO] = n0();
    }

    function n2() {}

    function n3(nj, nO) {
        return new n(nj, nO);
    }

    function n4(nj, nO) {
        for (var nt = "", nX = 0; nX + nO < nj.length;) {
            nt += nj.substring(nX, nX + nO) + "\n";
            nX += nO;
        }

        return nt + nj.substring(nX, nj.length);
    }

    function n5(nj) {
        return 16 > nj ? "0" + nj.toString(16) : nj.toString(16);
    }

    function n6(nj, nO) {
        if (nO < nj.length + 11) return console.error("Message too long for RSA"), null;

        for (var nt = new Array(), nX = nj.length - 1; nX >= 0 && nO > 0;) {
            var nG = nj.charCodeAt(nX--);

            if (128 > nG) {
                nt[--nO] = nG;
            } else {
                if (nG > 127 && 2048 > nG) {
                    nt[--nO] = 63 & nG | 128;
                    nt[--nO] = nG >> 6 | 192;
                } else {
                    nt[--nO] = 63 & nG | 128;
                    nt[--nO] = nG >> 6 & 63 | 128;
                    nt[--nO] = nG >> 12 | 224;
                }
            }
        }

        nt[--nO] = 0;

        for (var nx = new n2(), nN = new Array(); nO > 2;) {
            for (nN[0] = 0; 0 == nN[0];) nx.nextBytes(nN);

            nt[--nO] = nN[0];
        }

        return nt[--nO] = 2, nt[--nO] = 0, new n(nt);
    }

    function n7() {
        this.n = null;
        this.e = 0;
        this.d = null;
        this.p = null;
        this.q = null;
        this.dmp1 = null;
        this.dmq1 = null;
        this.coeff = null;
    }

    function n8(nj, nO) {
        if (null != nj && null != nO && nj.length > 0 && nO.length > 0) {
            this.n = n3(nj, 16);
            this.e = parseInt(nO, 16);
        } else {
            console.error("Invalid RSA public key");
        }
    }

    function n9(nj) {
        return nj.modPowInt(this.e, this.n);
    }

    function np(nj) {
        var nO = n6(nj, this.n.bitLength() + 7 >> 3);
        if (null == nO) return null;
        var nt = this.doPublic(nO);
        if (null == nt) return null;
        var nX = nt.toString(16);
        return 0 == (1 & nX.length) ? nX : "0" + nX;
    }

    function nn(nj, nO) {
        for (var nt = nj.toByteArray(), nX = 0; nX < nt.length && 0 == nt[nX];) ++nX;

        if (nt.length - nX != nO - 1 || 2 != nt[nX]) return null;

        for (++nX; 0 != nt[nX];) if (++nX >= nt.length) return null;

        for (var nG = ""; ++nX < nt.length;) {
            var nx = 255 & nt[nX];

            if (128 > nx) {
                nG += String.fromCharCode(nx);
            } else {
                if (nx > 191 && 224 > nx) {
                    nG += String.fromCharCode((31 & nx) << 6 | 63 & nt[nX + 1]);
                    ++nX;
                } else {
                    nG += String.fromCharCode((15 & nx) << 12 | (63 & nt[nX + 1]) << 6 | 63 & nt[nX + 2]);
                    nX += 2;
                }
            }
        }

        return nG;
    }

    function nc(nj, nO, nt) {
        if (null != nj && null != nO && nj.length > 0 && nO.length > 0) {
            this.n = n3(nj, 16);
            this.e = parseInt(nO, 16);
            this.d = n3(nt, 16);
        } else {
            console.error("Invalid RSA private key");
        }
    }

    function na(nj, nO, nt, nX, nG, nx, nN, nD) {
        if (null != nj && null != nO && nj.length > 0 && nO.length > 0) {
            this.n = n3(nj, 16);
            this.e = parseInt(nO, 16);
            this.d = n3(nt, 16);
            this.p = n3(nX, 16);
            this.q = n3(nG, 16);
            this.dmp1 = n3(nx, 16);
            this.dmq1 = n3(nN, 16);
            this.coeff = n3(nD, 16);
        } else {
            console.error("Invalid RSA private key");
        }
    }

    function nA(nj, nO) {
        var nt = new n2();
        var nX = nj >> 1;
        this.e = parseInt(nO, 16);

        for (var nG = new n(nO, 16);;) {
            for (; this.p = new n(nj - nX, 1, nt), 0 != this.p.subtract(n.ONE).gcd(nG).compareTo(n.ONE) || !this.p.isProbablePrime(10););

            for (; this.q = new n(nX, 1, nt), 0 != this.q.subtract(n.ONE).gcd(nG).compareTo(n.ONE) || !this.q.isProbablePrime(10););

            if (this.p.compareTo(this.q) <= 0) {
                var nx = this.p;
                this.p = this.q;
                this.q = nx;
            }

            var nN = this.p.subtract(n.ONE);
            var nD = this.q.subtract(n.ONE);
            var ny = nN.multiply(nD);

            if (0 == ny.gcd(nG).compareTo(n.ONE)) {
                this.n = this.p.multiply(this.q);
                this.d = nG.modInverse(ny);
                this.dmp1 = this.d.mod(nN);
                this.dmq1 = this.d.mod(nD);
                this.coeff = this.q.modInverse(this.p);
                break;
            }
        }
    }

    function nL(nj) {
        if (null == this.p || null == this.q) return nj.modPow(this.d, this.n);

        for (var nO = nj.mod(this.p).modPow(this.dmp1, this.p), nt = nj.mod(this.q).modPow(this.dmq1, this.q); nO.compareTo(nt) < 0;) nO = nO.add(this.p);

        return nO.subtract(nt).multiply(this.coeff).mod(this.p).multiply(this.q).add(nt);
    }

    function ng(nj) {
        var nO = n3(nj, 16);
        var nt = this.doPrivate(nO);
        return null == nt ? null : nn(nt, this.n.bitLength() + 7 >> 3);
    }

    function nS(nj) {
        var nO;
        var nt;
        var nX = "";

        for (nO = 0; nO + 3 <= nj.length; nO += 3) {
            nt = parseInt(nj.substring(nO, nO + 3), 16);
            nX += nw.charAt(nt >> 6) + nw.charAt(63 & nt);
        }

        for (nO + 1 == nj.length ? (nt = parseInt(nj.substring(nO, nO + 1), 16), nX += nw.charAt(nt << 2)) : nO + 2 == nj.length && (nt = parseInt(nj.substring(nO, nO + 2), 16), nX += nw.charAt(nt >> 2) + nw.charAt((3 & nt) << 4)); (3 & nX.length) > 0;) nX += nM;

        return nX;
    }

    function nf(nj) {
        var nO;
        var nt;
        var nX = "";
        var nG = 0;

        for (nO = 0; nO < nj.length && nj.charAt(nO) != nM; ++nO) {
            v = nw.indexOf(nj.charAt(nO));
            v < 0 || (0 == nG ? (nX += S(v >> 2), nt = 3 & v, nG = 1) : 1 == nG ? (nX += S(nt << 2 | v >> 4), nt = 15 & v, nG = 2) : 2 == nG ? (nX += S(nt), nX += S(v >> 2), nt = 3 & v, nG = 3) : (nX += S(nt << 2 | v >> 4), nX += S(15 & v), nG = 0));
        }

        return 1 == nG && (nX += S(nt << 2)), nX;
    }

    function nY(nj) {
        var nO;
        var nt = nf(nj);
        var nX = new Array();

        for (nO = 0; 2 * nO < nt.length; ++nO) nX[nO] = parseInt(nt.substring(2 * nO, 2 * nO + 2), 16);

        return nX;
    }

    var nJ;
    var nb = 244837814094590;
    var nC = 15715070 == (16777215 & nb);
    nC && "Microsoft Internet Explorer" == navigator.appName ? (n.prototype.am = A, nJ = 30) : nC && "Netscape" != navigator.appName ? (n.prototype.am = a, nJ = 26) : (n.prototype.am = g, nJ = 28);
    n.prototype.DB = nJ;
    n.prototype.DM = (1 << nJ) - 1;
    n.prototype.DV = 1 << nJ;
    var nV = 52;
    n.prototype.FV = Math.pow(2, nV);
    n.prototype.F1 = nV - nJ;
    n.prototype.F2 = 2 * nJ - nV;
    var nW = "0123456789abcdefghijklmnopqrstuvwxyz";
    var nl = new Array();
    var nR;
    var nB;

    for (nR = "0".charCodeAt(0), nB = 0; 9 >= nB; ++nB) nl[nR++] = nB;

    for (nR = "a".charCodeAt(0), nB = 10; 36 > nB; ++nB) nl[nR++] = nB;

    for (nR = "A".charCodeAt(0), nB = 10; 36 > nB; ++nB) nl[nR++] = nB;

    u.prototype.convert = k;
    u.prototype.revert = q;
    u.prototype.reduce = U;
    u.prototype.mulTo = h;
    u.prototype.sqrTo = H;
    O.prototype.convert = X;
    O.prototype.revert = G;
    O.prototype.reduce = x;
    O.prototype.mulTo = D;
    O.prototype.sqrTo = N;
    n.prototype.copyTo = Y;
    n.prototype.fromInt = J;
    n.prototype.fromString = C;
    n.prototype.clamp = V;
    n.prototype.dlShiftTo = s;
    n.prototype.drShiftTo = I;
    n.prototype.lShiftTo = K;
    n.prototype.rShiftTo = T;
    n.prototype.subTo = i;
    n.prototype.multiplyTo = e;
    n.prototype.squareTo = Z;
    n.prototype.divRemTo = w;
    n.prototype.invDigit = j;
    n.prototype.isEven = y;
    n.prototype.exp = o;
    n.prototype.toString = W;
    n.prototype.negate = l;
    n.prototype.abs = R;
    n.prototype.compareTo = B;
    n.prototype.bitLength = E;
    n.prototype.mod = M;
    n.prototype.modPowInt = v;
    n.ZERO = b(0);
    n.ONE = b(1);
    pu.prototype.convert = pk;
    pu.prototype.revert = pk;
    pu.prototype.mulTo = pq;
    pu.prototype.sqrTo = pU;
    pj.prototype.convert = pO;
    pj.prototype.revert = pt;
    pj.prototype.reduce = pX;
    pj.prototype.mulTo = px;
    pj.prototype.sqrTo = pG;
    var nF = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    var nE = 67108864 / nF[nF.length - 1];
    n.prototype.chunkSize = P;
    n.prototype.toRadix = p1;
    n.prototype.fromRadix = p2;
    n.prototype.fromNumber = p3;
    n.prototype.bitwiseTo = p8;
    n.prototype.changeBit = pl;
    n.prototype.addTo = pE;
    n.prototype.dMultiply = pw;
    n.prototype.dAddOffset = pM;
    n.prototype.multiplyLowerTo = ph;
    n.prototype.multiplyUpperTo = pH;
    n.prototype.modInt = py;
    n.prototype.millerRabin = pm;
    n.prototype.clone = m;
    n.prototype.intValue = d;
    n.prototype.byteValue = r;
    n.prototype.shortValue = Q;
    n.prototype.signum = p0;
    n.prototype.toByteArray = p4;
    n.prototype.equals = p5;
    n.prototype.min = p6;
    n.prototype.max = p7;
    n.prototype.and = pp;
    n.prototype.or = pc;
    n.prototype.xor = pA;
    n.prototype.andNot = pg;
    n.prototype.not = pS;
    n.prototype.shiftLeft = pf;
    n.prototype.shiftRight = pY;
    n.prototype.getLowestSetBit = pb;
    n.prototype.bitCount = pV;
    n.prototype.testBit = pW;
    n.prototype.setBit = pR;
    n.prototype.clearBit = pB;
    n.prototype.flipBit = pF;
    n.prototype.add = ps;
    n.prototype.subtract = pI;
    n.prototype.multiply = pK;
    n.prototype.divide = pi;
    n.prototype.remainder = pe;
    n.prototype.divideAndRemainder = pZ;
    n.prototype.modPow = pN;
    n.prototype.modInverse = po;
    n.prototype.pow = pz;
    n.prototype.gcd = pD;
    n.prototype.isProbablePrime = pv;
    n.prototype.square = pT;
    pd.prototype.init = pr;
    pd.prototype.next = pQ;
    var ns = 256;
    var nI;
    var nK;
    var nT;

    if (null == nK) {
        nK = new Array();
        nT = 0;
        var ni;

        if (window.crypto && window.crypto.getRandomValues) {
            var ne = new Uint32Array(256);

            for (window.crypto.getRandomValues(ne), ni = 0; ni < ne.length; ++ni) nK[nT++] = 255 & ne[ni];
        }

        var nZ = function (nj) {
            if (this.count = this.count || 0, this.count >= 256 || nT >= ns) return void (window.removeEventListener ? window.removeEventListener("mousemove", nZ) : window.detachEvent && window.detachEvent("onmousemove", nZ));
            this.count += 1;
            var nO = nj.x + nj.y;
            nK[nT++] = 255 & nO;
        };

        if (window.addEventListener) {
            window.addEventListener("mousemove", nZ);
        } else {
            if (window.attachEvent) {
                window.attachEvent("onmousemove", nZ);
            }
        }
    }

    n2.prototype.nextBytes = n1;
    n7.prototype.doPublic = n9;
    n7.prototype.setPublic = n8;
    n7.prototype.encrypt = np;
    n7.prototype.doPrivate = nL;
    n7.prototype.setPrivate = nc;
    n7.prototype.setPrivateEx = na;
    n7.prototype.generate = nA;
    n7.prototype.decrypt = ng;

    (function () {
        var nj = function (nX, nG, nx) {
            var nN = new n2();
            var nD = nX >> 1;
            this.e = parseInt(nG, 16);
            var ny = new n(nG, 16);
            var no = this;

            var nv = function () {
                var nm = function () {
                    if (no.p.compareTo(no.q) <= 0) {
                        var nQ = no.p;
                        no.p = no.q;
                        no.q = nQ;
                    }

                    var nP = no.p.subtract(n.ONE);
                    var c0 = no.q.subtract(n.ONE);
                    var c1 = nP.multiply(c0);

                    if (0 == c1.gcd(ny).compareTo(n.ONE)) {
                        no.n = no.p.multiply(no.q);
                        no.d = ny.modInverse(c1);
                        no.dmp1 = no.d.mod(nP);
                        no.dmq1 = no.d.mod(c0);
                        no.coeff = no.q.modInverse(no.p);
                        setTimeout(function () {
                            nx();
                        }, 0);
                    } else {
                        setTimeout(nv, 0);
                    }
                };

                var nd = function () {
                    no.q = c();
                    no.q.fromNumberAsync(nD, 1, nN, function () {
                        no.q.subtract(n.ONE).gcda(ny, function (nQ) {
                            if (0 == nQ.compareTo(n.ONE) && no.q.isProbablePrime(10)) {
                                setTimeout(nm, 0);
                            } else {
                                setTimeout(nd, 0);
                            }
                        });
                    });
                };

                var nr = function () {
                    no.p = c();
                    no.p.fromNumberAsync(nX - nD, 1, nN, function () {
                        no.p.subtract(n.ONE).gcda(ny, function (nQ) {
                            if (0 == nQ.compareTo(n.ONE) && no.p.isProbablePrime(10)) {
                                setTimeout(nd, 0);
                            } else {
                                setTimeout(nr, 0);
                            }
                        });
                    });
                };

                setTimeout(nr, 0);
            };

            setTimeout(nv, 0);
        };

        n7.prototype.generateAsync = nj;

        var nO = function (nX, nG) {
            if (this.s < 0) {
                var nx = this.negate();
            } else {
                var nx = this.clone();
            }

            if (nX.s < 0) {
                var nN = nX.negate();
            } else {
                var nN = nX.clone();
            }

            if (nx.compareTo(nN) < 0) {
                var nD = nx;
                nx = nN;
                nN = nD;
            }

            var ny = nx.getLowestSetBit();
            var no = nN.getLowestSetBit();
            if (0 > no) return void nG(nx);
            no > ny && (no = ny);
            no > 0 && (nx.rShiftTo(no, nx), nN.rShiftTo(no, nN));

            var nv = function () {
                (ny = nx.getLowestSetBit()) > 0 && nx.rShiftTo(ny, nx);
                (ny = nN.getLowestSetBit()) > 0 && nN.rShiftTo(ny, nN);
                nx.compareTo(nN) >= 0 ? (nx.subTo(nN, nx), nx.rShiftTo(1, nx)) : (nN.subTo(nx, nN), nN.rShiftTo(1, nN));
                nx.signum() > 0 ? setTimeout(nv, 0) : (no > 0 && nN.lShiftTo(no, nN), setTimeout(function () {
                    nG(nN);
                }, 0));
            };

            setTimeout(nv, 10);
        };

        n.prototype.gcda = nO;

        var nt = function (nX, nG, nx, nN) {
            if ("number" == typeof nG) {
                if (2 > nX) this.fromInt(1);else {
                    this.fromNumber(nX, nx);
                    this.testBit(nX - 1) || this.bitwiseTo(n.ONE.shiftLeft(nX - 1), pn, this);
                    this.isEven() && this.dAddOffset(1, 0);
                    var nD = this;

                    var ny = function () {
                        nD.dAddOffset(2, 0);
                        nD.bitLength() > nX && nD.subTo(n.ONE.shiftLeft(nX - 1), nD);
                        nD.isProbablePrime(nG) ? setTimeout(function () {
                            nN();
                        }, 0) : setTimeout(ny, 0);
                    };

                    setTimeout(ny, 0);
                }
            } else {
                var no = new Array();
                var nv = 7 & nX;
                no.length = (nX >> 3) + 1;
                nG.nextBytes(no);
                nv > 0 ? no[0] &= (1 << nv) - 1 : no[0] = 0;
                this.fromString(no, 256);
            }
        };

        n.prototype.fromNumberAsync = nt;
    })();

    var nw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var nM = "=";
    var nu = nu || {};
    nu.env = nu.env || {};
    var nk = nu;
    var nq = Object.prototype;
    var nU = "[object Function]";
    var nz = ["toString", "valueOf"];

    nu.env.parseUA = function (nj) {
        var nO;

        var nt = function (ny) {
            var no = 0;
            return parseFloat(ny.replace(/\./g, function () {
                return 1 == no++ ? "" : ".";
            }));
        };

        var nX = navigator;
        var nG = {
            "ie": 0,
            "opera": 0,
            "gecko": 0,
            "webkit": 0,
            "chrome": 0,
            "mobile": null,
            "air": 0,
            "ipad": 0,
            "iphone": 0,
            "ipod": 0,
            "ios": null,
            "android": 0,
            "webos": 0,
            "caja": nX && nX.cajaVersion,
            "secure": !1,
            "os": null
        };
        var nx = nj || navigator && navigator.userAgent;
        var nN = window && window.location;
        var nD = nN && nN.href;
        return nG.secure = nD && 0 === nD.toLowerCase().indexOf("https"), nx && (/windows|win32/i.test(nx) ? nG.os = "windows" : /macintosh/i.test(nx) ? nG.os = "macintosh" : /rhino/i.test(nx) && (nG.os = "rhino"), /KHTML/.test(nx) && (nG.webkit = 1), nO = nx.match(/AppleWebKit\/([^\s]*)/), nO && nO[1] && (nG.webkit = nt(nO[1]), / Mobile\//.test(nx) ? (nG.mobile = "Apple", nO = nx.match(/OS ([^\s]*)/), nO && nO[1] && (nO = nt(nO[1].replace("_", "."))), nG.ios = nO, nG.ipad = nG.ipod = nG.iphone = 0, nO = nx.match(/iPad|iPod|iPhone/), nO && nO[0] && (nG[nO[0].toLowerCase()] = nG.ios)) : (nO = nx.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), nO && (nG.mobile = nO[0]), /webOS/.test(nx) && (nG.mobile = "WebOS", nO = nx.match(/webOS\/([^\s]*);/), nO && nO[1] && (nG.webos = nt(nO[1]))), / Android/.test(nx) && (nG.mobile = "Android", nO = nx.match(/Android ([^\s]*);/), nO && nO[1] && (nG.android = nt(nO[1])))), nO = nx.match(/Chrome\/([^\s]*)/), nO && nO[1] ? nG.chrome = nt(nO[1]) : (nO = nx.match(/AdobeAIR\/([^\s]*)/), nO && (nG.air = nO[0]))), nG.webkit || (nO = nx.match(/Opera[\s\/]([^\s]*)/), nO && nO[1] ? (nG.opera = nt(nO[1]), nO = nx.match(/Version\/([^\s]*)/), nO && nO[1] && (nG.opera = nt(nO[1])), nO = nx.match(/Opera Mini[^;]*/), nO && (nG.mobile = nO[0])) : (nO = nx.match(/MSIE\s([^;]*)/), nO && nO[1] ? nG.ie = nt(nO[1]) : (nO = nx.match(/Gecko\/([^\s]*)/), nO && (nG.gecko = 1, nO = nx.match(/rv:([^\s\)]*)/), nO && nO[1] && (nG.gecko = nt(nO[1]))))))), nG;
    };

    nu.env.ua = nu.env.parseUA();

    nu.isFunction = function (nj) {
        return "function" == typeof nj || nq.toString.apply(nj) === nU;
    };

    nu.env.ua.ie ? nu._IEEnumFix = function (nj, nO) {
        var nt;
        var nX;
        var nG;

        for (nt = 0; nt < nz.length; nt += 1) {
            nX = nz[nt];
            nG = nO[nX];
            nk.isFunction(nG) && nG != nq[nX] && (nj[nX] = nG);
        }
    } : nu._IEEnumFix = function () {};

    nu.extend = function (nj, nO, nt) {
        if (!nO || !nj) throw new Error("extend failed, please check that all dependencies are included.");
        var nX;

        var nG = function () {};

        if (nG.prototype = nO.prototype, nj.prototype = new nG(), nj.prototype.constructor = nj, nj.superclass = nO.prototype, nO.prototype.constructor == nq.constructor && (nO.prototype.constructor = nO), nt) {
            for (nX in nt) if (nk.hasOwnProperty(nt, nX)) {
                nj.prototype[nX] = nt[nX];
            }

            nk._IEEnumFix(nj.prototype, nt);
        }
    };

    "undefined" != typeof KJUR && KJUR || (KJUR = {});
    "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {});
    KJUR.asn1.ASN1Util = new function () {
        this.integerToByteHex = function (nj) {
            var nO = nj.toString(16);
            return nO.length % 2 == 1 && (nO = "0" + nO), nO;
        };

        this.bigIntToMinTwosComplementsHex = function (nj) {
            var nO = nj.toString(16);
            if ("-" != nO.substr(0, 1)) {
                if (nO.length % 2 == 1) {
                    nO = "0" + nO;
                } else {
                    nO.match(/^[0-7]/) || (nO = "00" + nO);
                }
            } else {
                var nt = nO.substr(1);
                var nX = nt.length;

                if (nX % 2 == 1) {
                    nX += 1;
                } else {
                    nO.match(/^[0-7]/) || (nX += 2);
                }

                for (var nG = "", nx = 0; nX > nx; nx++) nG += "f";

                var nN = new n(nG, 16);
                var nD = nN.xor(nj).add(n.ONE);
                nO = nD.toString(16).replace(/^-/, "");
            }
            return nO;
        };

        this.getPEMStringFromHex = function (nj, nO) {
            var nt = CryptoJS.enc.Hex.parse(nj);
            var nX = CryptoJS.enc.Base64.stringify(nt);
            var nG = nX.replace(/(.{64})/g, "$1\r\n");
            return nG = nG.replace(/\r\n$/, ""), "-----BEGIN " + nO + "-----\r\n" + nG + "\r\n-----END " + nO + "-----\r\n";
        };
    }();

    KJUR.asn1.ASN1Object = function () {
        var nj = "";

        this.getLengthHexFromValue = function () {
            if ("undefined" == typeof this.hV || null == this.hV) throw "this.hV is null or undefined.";
            if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + nj.length + ",v=" + this.hV;
            var nO = this.hV.length / 2;
            var nt = nO.toString(16);
            if (nt.length % 2 == 1 && (nt = "0" + nt), 128 > nO) return nt;
            var nX = nt.length / 2;
            if (nX > 15) throw "ASN.1 length too long to represent by 8x: n = " + nO.toString(16);
            var nG = 128 + nX;
            return nG.toString(16) + nt;
        };

        this.getEncodedHex = function () {
            return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV;
        };

        this.getValueHex = function () {
            return this.getEncodedHex(), this.hV;
        };

        this.getFreshValueHex = function () {
            return "";
        };
    };

    KJUR.asn1.DERAbstractString = function (nj) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);

        this.getString = function () {
            return this.s;
        };

        this.setString = function (nO) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = nO;
            this.hV = stohex(this.s);
        };

        this.setStringHex = function (nO) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = nO;
        };

        this.getFreshValueHex = function () {
            return this.hV;
        };

        "undefined" != typeof nj && ("undefined" != typeof nj.str ? this.setString(nj.str) : "undefined" != typeof nj.hex && this.setStringHex(nj.hex));
    };

    nu.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);

    KJUR.asn1.DERAbstractTime = function () {
        KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);

        this.localDateToUTC = function (nj) {
            utc = nj.getTime() + 60000 * nj.getTimezoneOffset();
            var nO = new Date(utc);
            return nO;
        };

        this.formatDate = function (nj, nO) {
            var nt = this.zeroPadding;
            var nX = this.localDateToUTC(nj);
            var nG = String(nX.getFullYear());

            if ("utc" == nO) {
                nG = nG.substr(2, 2);
            }

            var nx = nt(String(nX.getMonth() + 1), 2);
            var nN = nt(String(nX.getDate()), 2);
            var nD = nt(String(nX.getHours()), 2);
            var ny = nt(String(nX.getMinutes()), 2);
            var no = nt(String(nX.getSeconds()), 2);
            return nG + nx + nN + nD + ny + no + "Z";
        };

        this.zeroPadding = function (nj, nO) {
            return nj.length >= nO ? nj : new Array(nO - nj.length + 1).join("0") + nj;
        };

        this.getString = function () {
            return this.s;
        };

        this.setString = function (nj) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = nj;
            this.hV = stohex(this.s);
        };

        this.setByDateValue = function (nj, nO, nt, nX, nG, nx) {
            var nN = new Date(Date.UTC(nj, nO - 1, nt, nX, nG, nx, 0));
            this.setByDate(nN);
        };

        this.getFreshValueHex = function () {
            return this.hV;
        };
    };

    nu.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);

    KJUR.asn1.DERAbstractStructured = function (nj) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);

        this.setByASN1ObjectArray = function (nO) {
            this.hTLV = null;
            this.isModified = !0;
            this.asn1Array = nO;
        };

        this.appendASN1Object = function (nO) {
            this.hTLV = null;
            this.isModified = !0;
            this.asn1Array.push(nO);
        };

        this.asn1Array = new Array();
        "undefined" != typeof nj && "undefined" != typeof nj.array && (this.asn1Array = nj.array);
    };

    nu.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);

    KJUR.asn1.DERBoolean = function () {
        KJUR.asn1.DERBoolean.superclass.constructor.call(this);
        this.hT = "01";
        this.hTLV = "0101ff";
    };

    nu.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);

    KJUR.asn1.DERInteger = function (nj) {
        KJUR.asn1.DERInteger.superclass.constructor.call(this);
        this.hT = "02";

        this.setByBigInteger = function (nO) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(nO);
        };

        this.setByInteger = function (nO) {
            var nt = new n(String(nO), 10);
            this.setByBigInteger(nt);
        };

        this.setValueHex = function (nO) {
            this.hV = nO;
        };

        this.getFreshValueHex = function () {
            return this.hV;
        };

        "undefined" != typeof nj && ("undefined" != typeof nj.bigint ? this.setByBigInteger(nj.bigint) : "undefined" != typeof nj.int ? this.setByInteger(nj.int) : "undefined" != typeof nj.hex && this.setValueHex(nj.hex));
    };

    nu.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);

    KJUR.asn1.DERBitString = function (nj) {
        KJUR.asn1.DERBitString.superclass.constructor.call(this);
        this.hT = "03";

        this.setHexValueIncludingUnusedBits = function (nO) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = nO;
        };

        this.setUnusedBitsAndHexValue = function (nO, nt) {
            if (0 > nO || nO > 7) throw "unused bits shall be from 0 to 7: u = " + nO;
            var nX = "0" + nO;
            this.hTLV = null;
            this.isModified = !0;
            this.hV = nX + nt;
        };

        this.setByBinaryString = function (nO) {
            nO = nO.replace(/0+$/, "");
            var nt = 8 - nO.length % 8;

            if (8 == nt) {
                nt = 0;
            }

            for (var nX = 0; nt >= nX; nX++) nO += "0";

            for (var nG = "", nX = 0; nX < nO.length - 1; nX += 8) {
                var nx = nO.substr(nX, 8);
                var nN = parseInt(nx, 2).toString(16);
                1 == nN.length && (nN = "0" + nN);
                nG += nN;
            }

            this.hTLV = null;
            this.isModified = !0;
            this.hV = "0" + nt + nG;
        };

        this.setByBooleanArray = function (nO) {
            for (var nt = "", nX = 0; nX < nO.length; nX++) nt += 1 == nO[nX] ? "1" : "0";

            this.setByBinaryString(nt);
        };

        this.newFalseArray = function (nO) {
            for (var nt = new Array(nO), nX = 0; nO > nX; nX++) nt[nX] = !1;

            return nt;
        };

        this.getFreshValueHex = function () {
            return this.hV;
        };

        "undefined" != typeof nj && ("undefined" != typeof nj.hex ? this.setHexValueIncludingUnusedBits(nj.hex) : "undefined" != typeof nj.bin ? this.setByBinaryString(nj.bin) : "undefined" != typeof nj.array && this.setByBooleanArray(nj.array));
    };

    nu.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);

    KJUR.asn1.DEROctetString = function (nj) {
        KJUR.asn1.DEROctetString.superclass.constructor.call(this, nj);
        this.hT = "04";
    };

    nu.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);

    KJUR.asn1.DERNull = function () {
        KJUR.asn1.DERNull.superclass.constructor.call(this);
        this.hT = "05";
        this.hTLV = "0500";
    };

    nu.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);

    KJUR.asn1.DERObjectIdentifier = function (nj) {
        var nO = function (nX) {
            var nG = nX.toString(16);
            return 1 == nG.length && (nG = "0" + nG), nG;
        };

        var nt = function (nX) {
            var nG = "";
            var nx = new n(nX, 10);
            var nN = nx.toString(2);
            var nD = 7 - nN.length % 7;

            if (7 == nD) {
                nD = 0;
            }

            for (var ny = "", no = 0; nD > no; no++) ny += "0";

            nN = ny + nN;

            for (var no = 0; no < nN.length - 1; no += 7) {
                var nv = nN.substr(no, 7);
                no != nN.length - 7 && (nv = "1" + nv);
                nG += nO(parseInt(nv, 2));
            }

            return nG;
        };

        KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
        this.hT = "06";

        this.setValueHex = function (nX) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = nX;
        };

        this.setValueOidString = function (nX) {
            if (!nX.match(/^[0-9.]+$/)) throw "malformed oid string: " + nX;
            var nG = "";
            var nx = nX.split(".");
            var nN = 40 * parseInt(nx[0]) + parseInt(nx[1]);
            nG += nO(nN);
            nx.splice(0, 2);

            for (var nD = 0; nD < nx.length; nD++) nG += nt(nx[nD]);

            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = nG;
        };

        this.setValueName = function (nX) {
            if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[nX]) throw "DERObjectIdentifier oidName undefined: " + nX;
            var nG = KJUR.asn1.x509.OID.name2oidList[nX];
            this.setValueOidString(nG);
        };

        this.getFreshValueHex = function () {
            return this.hV;
        };

        "undefined" != typeof nj && ("undefined" != typeof nj.oid ? this.setValueOidString(nj.oid) : "undefined" != typeof nj.hex ? this.setValueHex(nj.hex) : "undefined" != typeof nj.name && this.setValueName(nj.name));
    };

    nu.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);

    KJUR.asn1.DERUTF8String = function (nj) {
        KJUR.asn1.DERUTF8String.superclass.constructor.call(this, nj);
        this.hT = "0c";
    };

    nu.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);

    KJUR.asn1.DERNumericString = function (nj) {
        KJUR.asn1.DERNumericString.superclass.constructor.call(this, nj);
        this.hT = "12";
    };

    nu.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);

    KJUR.asn1.DERPrintableString = function (nj) {
        KJUR.asn1.DERPrintableString.superclass.constructor.call(this, nj);
        this.hT = "13";
    };

    nu.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);

    KJUR.asn1.DERTeletexString = function (nj) {
        KJUR.asn1.DERTeletexString.superclass.constructor.call(this, nj);
        this.hT = "14";
    };

    nu.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);

    KJUR.asn1.DERIA5String = function (nj) {
        KJUR.asn1.DERIA5String.superclass.constructor.call(this, nj);
        this.hT = "16";
    };

    nu.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);

    KJUR.asn1.DERUTCTime = function (nj) {
        KJUR.asn1.DERUTCTime.superclass.constructor.call(this, nj);
        this.hT = "17";

        this.setByDate = function (nO) {
            this.hTLV = null;
            this.isModified = !0;
            this.date = nO;
            this.s = this.formatDate(this.date, "utc");
            this.hV = stohex(this.s);
        };

        "undefined" != typeof nj && ("undefined" != typeof nj.str ? this.setString(nj.str) : "undefined" != typeof nj.hex ? this.setStringHex(nj.hex) : "undefined" != typeof nj.date && this.setByDate(nj.date));
    };

    nu.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);

    KJUR.asn1.DERGeneralizedTime = function (nj) {
        KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, nj);
        this.hT = "18";

        this.setByDate = function (nO) {
            this.hTLV = null;
            this.isModified = !0;
            this.date = nO;
            this.s = this.formatDate(this.date, "gen");
            this.hV = stohex(this.s);
        };

        "undefined" != typeof nj && ("undefined" != typeof nj.str ? this.setString(nj.str) : "undefined" != typeof nj.hex ? this.setStringHex(nj.hex) : "undefined" != typeof nj.date && this.setByDate(nj.date));
    };

    nu.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);

    KJUR.asn1.DERSequence = function (nj) {
        KJUR.asn1.DERSequence.superclass.constructor.call(this, nj);
        this.hT = "30";

        this.getFreshValueHex = function () {
            for (var nO = "", nt = 0; nt < this.asn1Array.length; nt++) {
                var nX = this.asn1Array[nt];
                nO += nX.getEncodedHex();
            }

            return this.hV = nO, this.hV;
        };
    };

    nu.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);

    KJUR.asn1.DERSet = function (nj) {
        KJUR.asn1.DERSet.superclass.constructor.call(this, nj);
        this.hT = "31";

        this.getFreshValueHex = function () {
            for (var nO = new Array(), nt = 0; nt < this.asn1Array.length; nt++) {
                var nX = this.asn1Array[nt];
                nO.push(nX.getEncodedHex());
            }

            return nO.sort(), this.hV = nO.join(""), this.hV;
        };
    };

    nu.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);

    KJUR.asn1.DERTaggedObject = function (nj) {
        KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
        this.hT = "a0";
        this.hV = "";
        this.isExplicit = !0;
        this.asn1Object = null;

        this.setASN1Object = function (nO, nt, nX) {
            this.hT = nt;
            this.isExplicit = nO;
            this.asn1Object = nX;
            this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = nX.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, nt), this.isModified = !1);
        };

        this.getFreshValueHex = function () {
            return this.hV;
        };

        "undefined" != typeof nj && ("undefined" != typeof nj.tag && (this.hT = nj.tag), "undefined" != typeof nj.explicit && (this.isExplicit = nj.explicit), "undefined" != typeof nj.obj && (this.asn1Object = nj.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
    };

    nu.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);

    (function (nj) {
        'use strict';

        var nO;
        var nt = {};

        nt.decode = function (nX) {
            var nG;

            if (nO === nj) {
                var nx = "0123456789ABCDEF";
                var nN = " \f\n\r\t聽\u2028\u2029";

                for (nO = [], nG = 0; 16 > nG; ++nG) nO[nx.charAt(nG)] = nG;

                for (nx = nx.toLowerCase(), nG = 10; 16 > nG; ++nG) nO[nx.charAt(nG)] = nG;

                for (nG = 0; nG < nN.length; ++nG) nO[nN.charAt(nG)] = -1;
            }

            var nD = [];
            var ny = 0;
            var no = 0;

            for (nG = 0; nG < nX.length; ++nG) {
                var nv = nX.charAt(nG);
                if ("=" == nv) break;

                if (nv = nO[nv], -1 != nv) {
                    if (nv === nj) throw "Illegal character at offset " + nG;
                    ny |= nv;
                    ++no >= 2 ? (nD[nD.length] = ny, ny = 0, no = 0) : ny <<= 4;
                }
            }

            if (no) throw "Hex encoding incomplete: 4 bits missing";
            return nD;
        };

        window.Hex = nt;
    })();

    (function (nj) {
        'use strict';

        var nO;
        var nt = {};

        nt.decode = function (nX) {
            var nG;

            if (nO === nj) {
                var nx = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var nN = "= \f\n\r\t聽\u2028\u2029";

                for (nO = [], nG = 0; 64 > nG; ++nG) nO[nx.charAt(nG)] = nG;

                for (nG = 0; nG < nN.length; ++nG) nO[nN.charAt(nG)] = -1;
            }

            var nD = [];
            var ny = 0;
            var no = 0;

            for (nG = 0; nG < nX.length; ++nG) {
                var nv = nX.charAt(nG);
                if ("=" == nv) break;

                if (nv = nO[nv], -1 != nv) {
                    if (nv === nj) throw "Illegal character at offset " + nG;
                    ny |= nv;
                    ++no >= 4 ? (nD[nD.length] = ny >> 16, nD[nD.length] = ny >> 8 & 255, nD[nD.length] = 255 & ny, ny = 0, no = 0) : ny <<= 6;
                }
            }

            switch (no) {
                case 1:
                    throw "Base64 encoding incomplete: at least 2 bits missing";

                case 2:
                    nD[nD.length] = ny >> 10;
                    break;

                case 3:
                    nD[nD.length] = ny >> 16;
                    nD[nD.length] = ny >> 8 & 255;
            }

            return nD;
        };

        nt.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;

        nt.unarmor = function (nX) {
            var nG = nt.re.exec(nX);

            if (nG) {
                if (nG[1]) nX = nG[1];else {
                    if (!nG[2]) throw "RegExp out of sync";
                    nX = nG[2];
                }
            }

            return nt.decode(nX);
        };

        window.Base64 = nt;
    })();

    (function (nj) {
        'use strict';

        function nO(nN, nD) {
            if (nN instanceof nO) {
                this.enc = nN.enc;
                this.pos = nN.pos;
            } else {
                this.enc = nN;
                this.pos = nD;
            }
        }

        function nt(nN, nD, ny, no, nv) {
            this.stream = nN;
            this.header = nD;
            this.length = ny;
            this.tag = no;
            this.sub = nv;
        }

        var nX = 100;
        var nG = "鈥�";
        var nx = {
            "tag": function (nN, nD) {
                var ny = document.createElement(nN);
                return ny.className = nD, ny;
            },
            "text": function (nN) {
                return document.createTextNode(nN);
            }
        };

        nO.prototype.get = function (nN) {
            if (nN === nj && (nN = this.pos++), nN >= this.enc.length) throw "Requesting byte offset " + nN + " on a stream of length " + this.enc.length;
            return this.enc[nN];
        };

        nO.prototype.hexDigits = "0123456789ABCDEF";

        nO.prototype.hexByte = function (nN) {
            return this.hexDigits.charAt(nN >> 4 & 15) + this.hexDigits.charAt(15 & nN);
        };

        nO.prototype.hexDump = function (nN, nD, ny) {
            for (var no = "", nv = nN; nD > nv; ++nv) if (no += this.hexByte(this.get(nv)), ny !== !0) switch (15 & nv) {
                case 7:
                    no += "  ";
                    break;

                case 15:
                    no += "\n";
                    break;

                default:
                    no += " ";
            }

            return no;
        };

        nO.prototype.parseStringISO = function (nN, nD) {
            for (var ny = "", no = nN; nD > no; ++no) ny += String.fromCharCode(this.get(no));

            return ny;
        };

        nO.prototype.parseStringUTF = function (nN, nD) {
            for (var ny = "", no = nN; nD > no;) {
                var nv = this.get(no++);
                ny += String.fromCharCode(128 > nv ? nv : nv > 191 && 224 > nv ? (31 & nv) << 6 | 63 & this.get(no++) : (15 & nv) << 12 | (63 & this.get(no++)) << 6 | 63 & this.get(no++));
            }

            return ny;
        };

        nO.prototype.parseStringBMP = function (nN, nD) {
            for (var ny = "", no = nN; nD > no; no += 2) {
                var nv = this.get(no);
                var nm = this.get(no + 1);
                ny += String.fromCharCode((nv << 8) + nm);
            }

            return ny;
        };

        nO.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

        nO.prototype.parseTime = function (nN, nD) {
            var ny = this.parseStringISO(nN, nD);
            var no = this.reTime.exec(ny);
            return no ? (ny = no[1] + "-" + no[2] + "-" + no[3] + " " + no[4], no[5] && (ny += ":" + no[5], no[6] && (ny += ":" + no[6], no[7] && (ny += "." + no[7]))), no[8] && (ny += " UTC", "Z" != no[8] && (ny += no[8], no[9] && (ny += ":" + no[9]))), ny) : "Unrecognized time: " + ny;
        };

        nO.prototype.parseInteger = function (nN, nD) {
            var ny = nD - nN;

            if (ny > 4) {
                ny <<= 3;
                var no = this.get(nN);
                if (0 === no) ny -= 8;else {
                    for (; 128 > no;) {
                        no <<= 1;
                        --ny;
                    }
                }
                return "(" + ny + " bit)";
            }

            for (var nv = 0, nm = nN; nD > nm; ++nm) nv = nv << 8 | this.get(nm);

            return nv;
        };

        nO.prototype.parseBitString = function (nN, nD) {
            var ny = this.get(nN);
            var no = (nD - nN - 1 << 3) - ny;
            var nv = "(" + no + " bit)";

            if (20 >= no) {
                var nm = ny;
                nv += " ";

                for (var nd = nD - 1; nd > nN; --nd) {
                    for (var nr = this.get(nd), nQ = nm; 8 > nQ; ++nQ) nv += nr >> nQ & 1 ? "1" : "0";

                    nm = 0;
                }
            }

            return nv;
        };

        nO.prototype.parseOctetString = function (nN, nD) {
            var ny = nD - nN;
            var no = "(" + ny + " byte) ";

            if (ny > nX) {
                nD = nN + nX;
            }

            for (var nv = nN; nD > nv; ++nv) no += this.hexByte(this.get(nv));

            return ny > nX && (no += nG), no;
        };

        nO.prototype.parseOID = function (nN, nD) {
            for (var ny = "", no = 0, nv = 0, nm = nN; nD > nm; ++nm) {
                var nd = this.get(nm);

                if (no = no << 7 | 127 & nd, nv += 7, !(128 & nd)) {
                    if ("" === ny) {
                        if (80 > no) {
                            var nr = 40 > no ? 0 : 1;
                        } else {
                            var nr = 2;
                        }

                        ny = nr + "." + (no - 40 * nr);
                    } else ny += "." + (nv >= 31 ? "bigint" : no);

                    no = nv = 0;
                }
            }

            return ny;
        };

        nt.prototype.typeName = function () {
            if (this.tag === nj) return "unknown";
            var nN = this.tag >> 6;
            var nD = (this.tag >> 5 & 1, 31 & this.tag);

            switch (nN) {
                case 0:
                    switch (nD) {
                        case 0:
                            return "EOC";

                        case 1:
                            return "BOOLEAN";

                        case 2:
                            return "INTEGER";

                        case 3:
                            return "BIT_STRING";

                        case 4:
                            return "OCTET_STRING";

                        case 5:
                            return "NULL";

                        case 6:
                            return "OBJECT_IDENTIFIER";

                        case 7:
                            return "ObjectDescriptor";

                        case 8:
                            return "EXTERNAL";

                        case 9:
                            return "REAL";

                        case 10:
                            return "ENUMERATED";

                        case 11:
                            return "EMBEDDED_PDV";

                        case 12:
                            return "UTF8String";

                        case 16:
                            return "SEQUENCE";

                        case 17:
                            return "SET";

                        case 18:
                            return "NumericString";

                        case 19:
                            return "PrintableString";

                        case 20:
                            return "TeletexString";

                        case 21:
                            return "VideotexString";

                        case 22:
                            return "IA5String";

                        case 23:
                            return "UTCTime";

                        case 24:
                            return "GeneralizedTime";

                        case 25:
                            return "GraphicString";

                        case 26:
                            return "VisibleString";

                        case 27:
                            return "GeneralString";

                        case 28:
                            return "UniversalString";

                        case 30:
                            return "BMPString";

                        default:
                            return "Universal_" + nD.toString(16);
                    }

                case 1:
                    return "Application_" + nD.toString(16);

                case 2:
                    return "[" + nD + "]";

                case 3:
                    return "Private_" + nD.toString(16);
            }
        };

        nt.prototype.reSeemsASCII = /^[ -~]+$/;

        nt.prototype.content = function () {
            if (this.tag === nj) return null;
            var nN = this.tag >> 6;
            var nD = 31 & this.tag;
            var ny = this.posContent();
            var no = Math.abs(this.length);

            if (0 !== nN) {
                if (null !== this.sub) return "(" + this.sub.length + " elem)";
                var nv = this.stream.parseStringISO(ny, ny + Math.min(no, nX));
                return this.reSeemsASCII.test(nv) ? nv.substring(0, 2 * nX) + (nv.length > 2 * nX ? nG : "") : this.stream.parseOctetString(ny, ny + no);
            }

            switch (nD) {
                case 1:
                    return 0 === this.stream.get(ny) ? "false" : "true";

                case 2:
                    return this.stream.parseInteger(ny, ny + no);

                case 3:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(ny, ny + no);

                case 4:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(ny, ny + no);

                case 6:
                    return this.stream.parseOID(ny, ny + no);

                case 16:
                case 17:
                    return "(" + this.sub.length + " elem)";

                case 12:
                    return this.stream.parseStringUTF(ny, ny + no);

                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return this.stream.parseStringISO(ny, ny + no);

                case 30:
                    return this.stream.parseStringBMP(ny, ny + no);

                case 23:
                case 24:
                    return this.stream.parseTime(ny, ny + no);
            }

            return null;
        };

        nt.prototype.toString = function () {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
        };

        nt.prototype.print = function (nN) {
            if (nN === nj && (nN = ""), document.writeln(nN + this), null !== this.sub) {
                nN += "  ";

                for (var nD = 0, ny = this.sub.length; ny > nD; ++nD) this.sub[nD].print(nN);
            }
        };

        nt.prototype.toPrettyString = function (nN) {
            if (nN === nj) {
                nN = "";
            }

            var nD = nN + this.typeName() + " @" + this.stream.pos;

            if (this.length >= 0 && (nD += "+"), nD += this.length, 32 & this.tag ? nD += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (nD += " (encapsulates)"), nD += "\n", null !== this.sub) {
                nN += "  ";

                for (var ny = 0, no = this.sub.length; no > ny; ++ny) nD += this.sub[ny].toPrettyString(nN);
            }

            return nD;
        };

        nt.prototype.toDOM = function () {
            var nN = nx.tag("div", "node");
            nN.asn1 = this;
            var nD = nx.tag("div", "head");
            var ny = this.typeName().replace(/_/g, " ");
            nD.innerHTML = ny;
            var no = this.content();

            if (null !== no) {
                no = String(no).replace(/</g, "&lt;");
                var nv = nx.tag("span", "preview");
                nv.appendChild(nx.text(no));
                nD.appendChild(nv);
            }

            nN.appendChild(nD);
            this.node = nN;
            this.head = nD;
            var nm = nx.tag("div", "value");

            if (ny = "Offset: " + this.stream.pos + "<br/>", ny += "Length: " + this.header + "+", ny += this.length >= 0 ? this.length : -this.length + " (undefined)", 32 & this.tag ? ny += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (ny += "<br/>(encapsulates)"), null !== no && (ny += "<br/>Value:<br/><b>" + no + "</b>", "object" == typeof oids && 6 == this.tag)) {
                var nd = oids[no];

                if (nd) {
                    nd.d && (ny += "<br/>" + nd.d);
                    nd.c && (ny += "<br/>" + nd.c);
                    nd.w && (ny += "<br/>(warning!)");
                }
            }

            nm.innerHTML = ny;
            nN.appendChild(nm);
            var nr = nx.tag("div", "sub");

            if (null !== this.sub) {
                for (var nQ = 0, nP = this.sub.length; nP > nQ; ++nQ) nr.appendChild(this.sub[nQ].toDOM());
            }

            return nN.appendChild(nr), nD.onclick = function () {
                if ("node collapsed" == nN.className) {
                    nN.className = "node";
                } else {
                    nN.className = "node collapsed";
                }
            }, nN;
        };

        nt.prototype.posStart = function () {
            return this.stream.pos;
        };

        nt.prototype.posContent = function () {
            return this.stream.pos + this.header;
        };

        nt.prototype.posEnd = function () {
            return this.stream.pos + this.header + Math.abs(this.length);
        };

        nt.prototype.fakeHover = function (nN) {
            this.node.className += " hover";
            nN && (this.head.className += " hover");
        };

        nt.prototype.fakeOut = function (nN) {
            var nD = / ?hover/;
            this.node.className = this.node.className.replace(nD, "");
            nN && (this.head.className = this.head.className.replace(nD, ""));
        };

        nt.prototype.toHexDOM_sub = function (nN, nD, ny, no, nv) {
            if (!(no >= nv)) {
                var nm = nx.tag("span", nD);
                nm.appendChild(nx.text(ny.hexDump(no, nv)));
                nN.appendChild(nm);
            }
        };

        nt.prototype.toHexDOM = function (nN) {
            var nD = nx.tag("span", "hex");
            if (nN === nj && (nN = nD), this.head.hexNode = nD, this.head.onmouseover = function () {
                this.hexNode.className = "hexCurrent";
            }, this.head.onmouseout = function () {
                this.hexNode.className = "hex";
            }, nD.asn1 = this, nD.onmouseover = function () {
                var nd = !nN.selected;
                nd && (nN.selected = this.asn1, this.className = "hexCurrent");
                this.asn1.fakeHover(nd);
            }, nD.onmouseout = function () {
                var nd = nN.selected == this.asn1;
                this.asn1.fakeOut(nd);
                nd && (nN.selected = null, this.className = "hex");
            }, this.toHexDOM_sub(nD, "tag", this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(nD, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()), null === this.sub) nD.appendChild(nx.text(this.stream.hexDump(this.posContent(), this.posEnd())));else {
                if (this.sub.length > 0) {
                    var ny = this.sub[0];
                    var no = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(nD, "intro", this.stream, this.posContent(), ny.posStart());

                    for (var nv = 0, nm = this.sub.length; nm > nv; ++nv) nD.appendChild(this.sub[nv].toHexDOM(nN));

                    this.toHexDOM_sub(nD, "outro", this.stream, no.posEnd(), this.posEnd());
                }
            }
            return nD;
        };

        nt.prototype.toHexString = function () {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
        };

        nt.decodeLength = function (nN) {
            var nD = nN.get();
            var ny = 127 & nD;
            if (ny == nD) return ny;
            if (ny > 3) throw "Length over 24 bits not supported at position " + (nN.pos - 1);
            if (0 === ny) return -1;
            nD = 0;

            for (var no = 0; ny > no; ++no) nD = nD << 8 | nN.get();

            return nD;
        };

        nt.hasContent = function (nN, nD, ny) {
            if (32 & nN) return !0;
            if (3 > nN || nN > 4) return !1;
            var no = new nO(ny);

            if (3 == nN) {
                no.get();
            }

            var nv = no.get();
            if (nv >> 6 & 1) return !1;

            try {
                var nm = nt.decodeLength(no);
                return no.pos - ny.pos + nm == nD;
            } catch (nd) {
                console.log(nd);
                return !1;
            }
        };

        nt.decode = function (nN) {
            nN instanceof nO || (nN = new nO(nN, 0));
            var nD = new nO(nN);
            var ny = nN.get();
            var no = nt.decodeLength(nN);
            var nv = nN.pos - nD.pos;
            var nm = null;

            if (nt.hasContent(ny, no, nN)) {
                var nd = nN.pos;

                if (3 == ny && nN.get(), nm = [], no >= 0) {
                    for (var nr = nd + no; nN.pos < nr;) nm[nm.length] = nt.decode(nN);

                    if (nN.pos != nr) throw "Content size is not correct for container starting at offset " + nd;
                } else try {
                    for (;;) {
                        var nQ = nt.decode(nN);
                        if (0 === nQ.tag) break;
                        nm[nm.length] = nQ;
                    }

                    no = nd - nN.pos;
                } catch (nP) {
                    console.log(nP);
                    throw "Exception while decoding undefined length content: " + nP;
                }
            } else nN.pos += no;

            return new nt(nD, nv, no, ny, nm);
        };

        nt.test = function () {
            for (var nN = [{
                "value": [39],
                "expected": 39
            }, {
                "value": [129, 201],
                "expected": 201
            }, {
                "value": [131, 254, 220, 186],
                "expected": 16702650
            }], nD = 0, ny = nN.length; ny > nD; ++nD) {
                var no = new nO(nN[nD].value, 0);
                var nv = nt.decodeLength(no);

                if (nv != nN[nD].expected) {
                    document.write("In test[" + nD + "] expected " + nN[nD].expected + " got " + nv + "\n");
                }
            }
        };

        window.ASN1 = nt;
    })();

    ASN1.prototype.getHexStringValue = function () {
        var nj = this.toHexString();
        var nO = 2 * this.header;
        var nt = 2 * this.length;
        return nj.substr(nO, nt);
    };

    n7.prototype.parseKey = function (nj) {
        try {
            var nO = 0;
            var nt = 0;
            var nX = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;

            if (nX.test(nj)) {
                var nG = Hex.decode(nj);
            } else {
                var nG = Base64.unarmor(nj);
            }

            var nx = ASN1.decode(nG);

            if (3 === nx.sub.length && (nx = nx.sub[2].sub[0]), 9 === nx.sub.length) {
                nO = nx.sub[1].getHexStringValue();
                this.n = n3(nO, 16);
                nt = nx.sub[2].getHexStringValue();
                this.e = parseInt(nt, 16);
                var nN = nx.sub[3].getHexStringValue();
                this.d = n3(nN, 16);
                var nD = nx.sub[4].getHexStringValue();
                this.p = n3(nD, 16);
                var ny = nx.sub[5].getHexStringValue();
                this.q = n3(ny, 16);
                var no = nx.sub[6].getHexStringValue();
                this.dmp1 = n3(no, 16);
                var nv = nx.sub[7].getHexStringValue();
                this.dmq1 = n3(nv, 16);
                var nm = nx.sub[8].getHexStringValue();
                this.coeff = n3(nm, 16);
            } else {
                if (2 !== nx.sub.length) return !1;
                var nd = nx.sub[1];
                var nr = nd.sub[0];
                nO = nr.sub[0].getHexStringValue();
                this.n = n3(nO, 16);
                nt = nr.sub[1].getHexStringValue();
                this.e = parseInt(nt, 16);
            }

            return !0;
        } catch (nQ) {
            console.log(nQ);
            return !1;
        }
    };

    n7.prototype.getPrivateBaseKey = function () {
        var nj = {
            "array": [new KJUR.asn1.DERInteger({
                "int": 0
            }), new KJUR.asn1.DERInteger({
                "bigint": this.n
            }), new KJUR.asn1.DERInteger({
                "int": this.e
            }), new KJUR.asn1.DERInteger({
                "bigint": this.d
            }), new KJUR.asn1.DERInteger({
                "bigint": this.p
            }), new KJUR.asn1.DERInteger({
                "bigint": this.q
            }), new KJUR.asn1.DERInteger({
                "bigint": this.dmp1
            }), new KJUR.asn1.DERInteger({
                "bigint": this.dmq1
            }), new KJUR.asn1.DERInteger({
                "bigint": this.coeff
            })]
        };
        var nO = new KJUR.asn1.DERSequence(nj);
        return nO.getEncodedHex();
    };

    n7.prototype.getPrivateBaseKeyB64 = function () {
        return nS(this.getPrivateBaseKey());
    };

    n7.prototype.getPublicBaseKey = function () {
        var nj = {
            "array": [new KJUR.asn1.DERObjectIdentifier({
                "oid": "1.2.840.113549.1.1.1"
            }), new KJUR.asn1.DERNull()]
        };
        var nO = new KJUR.asn1.DERSequence(nj);
        nj = {
            "array": [new KJUR.asn1.DERInteger({
                "bigint": this.n
            }), new KJUR.asn1.DERInteger({
                "int": this.e
            })]
        };
        var nt = new KJUR.asn1.DERSequence(nj);
        nj = {
            "hex": "00" + nt.getEncodedHex()
        };
        var nX = new KJUR.asn1.DERBitString(nj);
        nj = {
            "array": [nO, nX]
        };
        var nG = new KJUR.asn1.DERSequence(nj);
        return nG.getEncodedHex();
    };

    n7.prototype.getPublicBaseKeyB64 = function () {
        return nS(this.getPublicBaseKey());
    };

    n7.prototype.wordwrap = function (nj, nO) {
        if (nO = nO || 64, !nj) return nj;
        var nt = "(.{1," + nO + "})( +|$\n?)|(.{1," + nO + "})";
        return nj.match(RegExp(nt, "g")).join("\n");
    };

    n7.prototype.getPrivateKey = function () {
        var nj = "-----BEGIN RSA PRIVATE KEY-----\n";
        return nj += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n", nj += "-----END RSA PRIVATE KEY-----";
    };

    n7.prototype.getPublicKey = function () {
        var nj = "-----BEGIN PUBLIC KEY-----\n";
        return nj += this.wordwrap(this.getPublicBaseKeyB64()) + "\n", nj += "-----END PUBLIC KEY-----";
    };

    n7.prototype.hasPublicKeyProperty = function (nj) {
        return nj = nj || {}, nj.hasOwnProperty("n") && nj.hasOwnProperty("e");
    };

    n7.prototype.hasPrivateKeyProperty = function (nj) {
        return nj = nj || {}, nj.hasOwnProperty("n") && nj.hasOwnProperty("e") && nj.hasOwnProperty("d") && nj.hasOwnProperty("p") && nj.hasOwnProperty("q") && nj.hasOwnProperty("dmp1") && nj.hasOwnProperty("dmq1") && nj.hasOwnProperty("coeff");
    };

    n7.prototype.parsePropertiesFrom = function (nj) {
        this.n = nj.n;
        this.e = nj.e;
        nj.hasOwnProperty("d") && (this.d = nj.d, this.p = nj.p, this.q = nj.q, this.dmp1 = nj.dmp1, this.dmq1 = nj.dmq1, this.coeff = nj.coeff);
    };

    var nh = function (nj) {
        n7.call(this);
        nj && ("string" == typeof nj ? this.parseKey(nj) : (this.hasPrivateKeyProperty(nj) || this.hasPublicKeyProperty(nj)) && this.parsePropertiesFrom(nj));
    };

    nh.prototype = new n7();
    nh.prototype.constructor = nh;

    var nH = function (nj) {
        nj = nj || {};
        this.default_key_size = parseInt(nj.default_key_size) || 1024;
        this.default_public_exponent = nj.default_public_exponent || "010001";
        this.log = nj.log || !1;
        this.key = null;
    };

    nH.prototype.setKey = function (nj) {
        this.log && this.key && console.warn("A key was already set, overriding existing.");
        this.key = new nh(nj);
    };

    nH.prototype.setPrivateKey = function (nj) {
        this.setKey(nj);
    };

    nH.prototype.setPublicKey = function (nj) {
        this.setKey(nj);
    };

    nH.prototype.decrypt = function (nj) {
        try {
            return this.getKey().decrypt(nf(nj));
        } catch (nO) {
            console.log(nO);
            return !1;
        }
    };

    nH.prototype.encrypt = function (nj) {
        try {
            return nS(this.getKey().encrypt(nj));
        } catch (nO) {
            console.log(nO);
            return !1;
        }
    };

    nH.prototype.getKey = function (nj) {
        if (!this.key) {
            if (this.key = new nh(), nj && "[object Function]" === {}.toString.call(nj)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, nj);
            this.key.generate(this.default_key_size, this.default_public_exponent);
        }

        return this.key;
    };

    nH.prototype.getPrivateKey = function () {
        return this.getKey().getPrivateKey();
    };

    nH.prototype.getPrivateKeyB64 = function () {
        return this.getKey().getPrivateBaseKeyB64();
    };

    nH.prototype.getPublicKey = function () {
        return this.getKey().getPublicKey();
    };

    nH.prototype.getPublicKeyB64 = function () {
        return this.getKey().getPublicBaseKeyB64();
    };

    p.JSEncrypt = nH;
})(JSEncryptExports);

var JSEncrypt = JSEncryptExports.JSEncrypt;
if (YAHOO === undefined) var YAHOO = {};
YAHOO.lang = {
    "extend": function (p, n, A) {
        if (!n || !p) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");

        var L = function () {};

        L.prototype = n.prototype;
        p.prototype = new L();
        p.prototype.constructor = p;
        p.superclass = n.prototype;

        if (n.prototype.constructor == Object.prototype.constructor) {
            n.prototype.constructor = n;
        }

        if (A) {
            var S;

            for (S in A) {
                p.prototype[S] = A[S];
            }

            var Y = function () {};

            var J = ["toString", "valueOf"];

            try {
                if (/MSIE/.test(navigator.userAgent)) {
                    Y = function (C, V) {
                        for (S = 0; S < J.length; S = S + 1) {
                            var W = J[S];
                            var R = V[W];

                            if (typeof R === "function" && R != Object.prototype[W]) {
                                C[W] = R;
                            }
                        }
                    };
                }
            } catch (C) {
                console.log(C);
            }

            Y(p.prototype, A);
        }
    }
};
PVA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAy5R1R2yM5jPPvkO2F47qVqMkYj7o92DF8y1yMkCSxY1WwqG0\ndCdUZTnaoBuAz99wGt55oGLcdalV71nPUiGWs/b6GzVN5v72baz/Q2OxHtkrFKqL\nVX16LW31cW9hAntN84RCbvTeB0MNV+SHmXjIf17OQLCtDKHBZWZ5NKyqFstO+KOd\nu32d2jsw+DT5lOBzDUBk/wUw2KyFJVx7eK6sSXEyWqBk2nxMRDNYixIEN1V1EBSq\nf+OwKK5Mxi04r38+Qog8z03/t/u6CfAOWVmi+MdrD1VHXv/P7bnFlgRcLzKwK1QL\nTSLBE1PrMmNNj0oRjByhMoI9tY5X6mRBqLyDhwIDAQABAoIBAGO++RmGO6D9CNAJ\n4Bm52eKaK5UBiubOIR8NiNLLZb5qinRxg3eX35d7Wb2xzBLNwOFBWSl21trFncfY\n4qY0s+C4ZYHYQ7Om/7nsFeQAYAOj1yJYj01TXf4NTsGGF2t+W8qxZlV0H6dCOLL0\nU2YkUmRp4Le8eQVj6dyTcVaYNPxWQBnb9ZOEIEvEjeoO/DD7CCmt7LDCey9KrTQl\nAvuc2nN6uRV1Wfm0P8conKPJtVdgzMvJujNdpz+bBDqwsqgeCICjs/hSCNO81VH3\nDD7J0mG2OHqowOVqagoDHpBprHOUKxAeTs9I0KEL+hEI4zXCDL69+Xs6azuts733\nzSOmwxkCgYEA25czfPVxxcK685LhaAvwbmzWHqNp07ytRNGf+Aww6OdgWkdgPy0n\n20Gkg0HAqsxGcgZJk6cAkOy5hBLNHpHlGbeWFi+62lVNYUv3hAxumtiPyBMu7avE\nZQCTXND1H1f/2enRDJRxQsR8y/SX1ivmC5U6fx7hbpKxnXyRHnvSlk8CgYEA7VWp\nhLNkn4AEaPPW0TknwKG40At/hjecX2zWAyZVt4ydDSeKgMEOUdmvGGlSCrefAl0n\nPTfM9SdIDcO5OTa2wUayKLIsrb6TDnG6KXXN6z3HR3Q4qKJbG83eaMYDqqziPPV+\nxzRVWShI3EGwkLczASmiYy+sEAT0OkxP59xTKUkCgYBgaGjFkukJfy4fJDxsNtmv\nUX9MYkhjGrIjxbjq6UdL6dGGsVGTSxr1i0NUETkqg5bmFtaUybxY5GWqk6qUok8o\nVE7DnN73Xn4jmnun8OFagHvXxnxTApeuFGueU2tbAIKmxJ3wXPfA7Y0w6kkDUbCl\nIzZUe1VT+3mZgAgijxBsxwKBgQDNytiJ62/V6hBo3P6pPtEcdF6nb0DtpazfBaVw\n572twaywqlermzsKeCIenbx49I1ZZGLQ72C2NpCA9vTWCn5fiyiSpyScp0ImZTDS\nIIckctYoPDug5d7wdgtjeEfXp78osopyuwtCmu7Kpd8vLNt6J5raPI0K+vC22FL1\nLpOhmQKBgQCFeU448fL87N1MjMyusi8wJ5MLcn+kHbLTtpskTpfQM2p3Cnp4oL+7\nBI4AlXlKItV37rJIjZxQgLWhGoTZPplZaW4ooJCFJbazce5ua5fnsFS0oXhDN7uw\njaq+v5t8G6gFS09hEa4kz9O53t/7UGuQqh0Bxb0cJ9iNeAlhagvBDQ==\n-----END RSA PRIVATE KEY-----";

var CryptoJS = CryptoJS || function (p, n) {
    var A = {};
    var L = A.lib = {};

    var S = L.Base = function () {
        function E() {}

        return {
            "extend": function (s) {
                E.prototype = this;
                var I = new E();
                return s && I.mixIn(s), !I.hasOwnProperty("init") && (I.init = function () {
                    I.$super.init.apply(this, arguments);
                }), I.init.prototype = I, I.$super = this, I;
            },
            "create": function () {
                var s = this.extend();
                return s.init.apply(s, arguments), s;
            },
            "init": function () {},
            "mixIn": function (s) {
                for (var I in s) {
                    if (s.hasOwnProperty(I)) {
                        this[I] = s[I];
                    }
                }

                if (s.hasOwnProperty("toString")) {
                    this.toString = s.toString;
                }
            },
            "clone": function () {
                return this.init.prototype.extend(this);
            }
        };
    }();

    var Y = L.WordArray = S.extend({
        "init": function (E, s) {
            E = this.words = E || [];
            s != n ? this.sigBytes = s : this.sigBytes = E.length * 4;
        },
        "toString": function (E) {
            return (E || C).stringify(this);
        },
        "concat": function (E) {
            var I = this.words;
            var K = E.words;
            var T = this.sigBytes;
            var Z = E.sigBytes;
            this.clamp();
            if (T % 4) for (var w = 0; w < Z; w++) {
                var M = K[w >>> 2] >>> 24 - w % 4 * 8 & 255;
                I[T + w >>> 2] |= M << 24 - (T + w) % 4 * 8;
            } else for (var w = 0; w < Z; w += 4) {
                I[T + w >>> 2] = K[w >>> 2];
            }
            return this.sigBytes += Z, this;
        },
        "clamp": function () {
            var E = this.words;
            var s = this.sigBytes;
            E[s >>> 2] &= 4294967295 << 32 - s % 4 * 8;
            E.length = p.ceil(s / 4);
        },
        "clone": function () {
            var E = S.clone.call(this);
            return E.words = this.words.slice(0), E;
        },
        "random": function (E) {
            var s = [];

            for (var I = 0; I < E; I += 4) {
                s.push(p.random() * 4294967296 | 0);
            }

            return new Y.init(s, E);
        }
    });
    var J = A.enc = {};
    var C = J.Hex = {
        "stringify": function (E) {
            var I = E.words;
            var K = E.sigBytes;
            var T = [];

            for (var Z = 0; Z < K; Z++) {
                var w = I[Z >>> 2] >>> 24 - Z % 4 * 8 & 255;
                T.push((w >>> 4).toString(16));
                T.push((w & 15).toString(16));
            }

            return T.join("");
        },
        "parse": function (E) {
            var s = E.length;
            var I = [];

            for (var K = 0; K < s; K += 2) {
                I[K >>> 3] |= parseInt(E.substr(K, 2), 16) << 24 - K % 8 * 4;
            }

            return new Y.init(I, s / 2);
        }
    };
    var V = J.Latin1 = {
        "stringify": function (E) {
            var I = E.words;
            var K = E.sigBytes;
            var T = [];

            for (var Z = 0; Z < K; Z++) {
                var w = I[Z >>> 2] >>> 24 - Z % 4 * 8 & 255;
                T.push(String.fromCharCode(w));
            }

            return T.join("");
        },
        "parse": function (E) {
            var s = E.length;
            var I = [];

            for (var K = 0; K < s; K++) {
                I[K >>> 2] |= (E.charCodeAt(K) & 255) << 24 - K % 4 * 8;
            }

            return new Y.init(I, s);
        }
    };
    var W = J.Utf8 = {
        "stringify": function (E) {
            try {
                return decodeURIComponent(escape(V.stringify(E)));
            } catch (s) {
                console.log(s);
                throw new Error("Malformed UTF-8 data");
            }
        },
        "parse": function (E) {
            return V.parse(unescape(encodeURIComponent(E)));
        }
    };
    var R = L.BufferedBlockAlgorithm = S.extend({
        "reset": function () {
            this._data = new Y.init();
            this._nDataBytes = 0;
        },
        "_append": function (E) {
            typeof E == "string" && (E = W.parse(E));

            this._data.concat(E);

            this._nDataBytes += E.sigBytes;
        },
        "_process": function (E) {
            var I = this._data;
            var K = I.words;
            var T = I.sigBytes;
            var Z = this.blockSize;
            var M = Z * 4;
            var U = T / M;

            if (E) {
                U = p.ceil(U);
            } else {
                U = p.max((U | 0) - this._minBufferSize, 0);
            }

            var H = U * Z;
            var O = p.min(H * 4, T);

            if (H) {
                for (var X = 0; X < H; X += Z) {
                    this._doProcessBlock(K, X);
                }

                var G = K.splice(0, H);
                I.sigBytes -= O;
            }

            return new Y.init(G, O);
        },
        "clone": function () {
            var E = S.clone.call(this);
            return E._data = this._data.clone(), E;
        },
        "_minBufferSize": 0
    });
    var B = L.Hasher = R.extend({
        "cfg": S.extend(),
        "init": function (E) {
            this.cfg = this.cfg.extend(E);
            this.reset();
        },
        "reset": function () {
            R.reset.call(this);

            this._doReset();
        },
        "update": function (E) {
            return this._append(E), this._process(), this;
        },
        "finalize": function (E) {
            if (E) {
                this._append(E);
            }

            var s = this._doFinalize();

            return s;
        },
        "blockSize": 16,
        "_createHelper": function (E) {
            return function (s, I) {
                return new E.init(I).finalize(s);
            };
        },
        "_createHmacHelper": function (E) {
            return function (s, I) {
                return new F.HMAC.init(E, I).finalize(s);
            };
        }
    });
    var F = A.algo = {};
    return A;
}(Math);

(function (p) {
    var n = CryptoJS;
    var c = n.lib;
    var A = c.Base;
    var L = c.WordArray;
    var n = n.x64 = {};
    n.Word = A.extend({
        "init": function (S, Y) {
            this.high = S;
            this.low = Y;
        }
    });
    n.WordArray = A.extend({
        "init": function (S, Y) {
            S = this.words = S || [];
            Y != p ? this.sigBytes = Y : this.sigBytes = 8 * S.length;
        },
        "toX32": function () {
            for (var S = this.words, Y = S.length, J = [], C = 0; C < Y; C++) {
                var V = S[C];
                J.push(V.high);
                J.push(V.low);
            }

            return L.create(J, this.sigBytes);
        },
        "clone": function () {
            for (var S = A.clone.call(this), Y = S.words = this.words.slice(0), J = Y.length, C = 0; C < J; C++) Y[C] = Y[C].clone();

            return S;
        }
    });
})();

CryptoJS.lib.Cipher || function (c) {
    var a = CryptoJS;
    var A = a.lib;
    var L = A.Base;
    var S = A.WordArray;
    var Y = A.BufferedBlockAlgorithm;
    var J = a.enc.Base64;
    var b = a.algo.EvpKDF;
    var C = A.Cipher = Y.extend({
        "cfg": L.extend(),
        "createEncryptor": function (I, K) {
            return this.create(this._ENC_XFORM_MODE, I, K);
        },
        "createDecryptor": function (I, K) {
            return this.create(this._DEC_XFORM_MODE, I, K);
        },
        "init": function (I, K, T) {
            this.cfg = this.cfg.extend(T);
            this._xformMode = I;
            this._key = K;
            this.reset();
        },
        "reset": function () {
            Y.reset.call(this);

            this._doReset();
        },
        "process": function (I) {
            return this._append(I), this._process();
        },
        "finalize": function (I) {
            return I && this._append(I), this._doFinalize();
        },
        "keySize": 4,
        "ivSize": 4,
        "_ENC_XFORM_MODE": 1,
        "_DEC_XFORM_MODE": 2,
        "_createHelper": function (I) {
            return {
                "encrypt": function (K, T, i) {
                    return ("string" == typeof T ? E : F).encrypt(I, K, T, i);
                },
                "decrypt": function (K, T, i) {
                    return ("string" == typeof T ? E : F).decrypt(I, K, T, i);
                }
            };
        }
    });
    A.StreamCipher = C.extend({
        "_doFinalize": function () {
            return this._process(!0);
        },
        "blockSize": 1
    });
    var V = a.mode = {};

    var W = function (I, K, T) {
        var i = this._iv;

        if (i) {
            this._iv = c;
        } else {
            i = this._prevBlock;
        }

        for (var Z = 0; Z < T; Z++) I[K + Z] ^= i[Z];
    };

    var R = (A.BlockCipherMode = L.extend({
        "createEncryptor": function (I, K) {
            return this.Encryptor.create(I, K);
        },
        "createDecryptor": function (I, K) {
            return this.Decryptor.create(I, K);
        },
        "init": function (I, K) {
            this._cipher = I;
            this._iv = K;
        }
    })).extend();
    R.Encryptor = R.extend({
        "processBlock": function (I, K) {
            var T = this._cipher;
            var i = T.blockSize;
            W.call(this, I, K, i);
            T.encryptBlock(I, K);
            this._prevBlock = I.slice(K, K + i);
        }
    });
    R.Decryptor = R.extend({
        "processBlock": function (I, K) {
            var T = this._cipher;
            var i = T.blockSize;
            var Z = I.slice(K, K + i);
            T.decryptBlock(I, K);
            W.call(this, I, K, i);
            this._prevBlock = Z;
        }
    });
    V = V.CBC = R;
    R = (a.pad = {}).Pkcs7 = {
        "pad": function (I, K) {
            for (var T = 4 * K, T = T - I.sigBytes % T, i = T << 24 | T << 16 | T << 8 | T, Z = [], w = 0; w < T; w += 4) Z.push(i);

            T = S.create(Z, T);
            I.concat(T);
        },
        "unpad": function (I) {
            I.sigBytes -= I.words[I.sigBytes - 1 >>> 2] & 255;
        }
    };
    A.BlockCipher = C.extend({
        "cfg": C.cfg.extend({
            "mode": V,
            "padding": R
        }),
        "reset": function () {
            C.reset.call(this);
            var I = this.cfg;
            var K = I.iv;
            var I = I.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var T = I.createEncryptor;else {
                T = I.createDecryptor;
                this._minBufferSize = 1;
            }
            this._mode = T.call(I, this, K && K.words);
        },
        "_doProcessBlock": function (I, K) {
            this._mode.processBlock(I, K);
        },
        "_doFinalize": function () {
            var I = this.cfg.padding;

            if (this._xformMode == this._ENC_XFORM_MODE) {
                I.pad(this._data, this.blockSize);

                var K = this._process(!0);
            } else {
                K = this._process(!0);
                I.unpad(K);
            }

            return K;
        },
        "blockSize": 4
    });
    var B = A.CipherParams = L.extend({
        "init": function (I) {
            this.mixIn(I);
        },
        "toString": function (I) {
            return (I || this.formatter).stringify(this);
        }
    });
    var V = (a.format = {}).OpenSSL = {
        "stringify": function (I) {
            var K = I.ciphertext;
            return I = I.salt, (I ? S.create([1398893684, 1701076831]).concat(I).concat(K) : K).toString(J);
        },
        "parse": function (I) {
            I = J.parse(I);
            var K = I.words;

            if (1398893684 == K[0] && 1701076831 == K[1]) {
                var T = S.create(K.slice(2, 4));
                K.splice(0, 4);
                I.sigBytes -= 16;
            }

            return B.create({
                "ciphertext": I,
                "salt": T
            });
        }
    };
    var F = A.SerializableCipher = L.extend({
        "cfg": L.extend({
            "format": V
        }),
        "encrypt": function (I, K, T, i) {
            i = this.cfg.extend(i);
            var Z = I.createEncryptor(T, i);
            return K = Z.finalize(K), Z = Z.cfg, B.create({
                "ciphertext": K,
                "key": T,
                "iv": Z.iv,
                "algorithm": I,
                "mode": Z.mode,
                "padding": Z.padding,
                "blockSize": I.blockSize,
                "formatter": i.format
            });
        },
        "decrypt": function (I, K, T, i) {
            return i = this.cfg.extend(i), K = this._parse(K, i.format), I.createDecryptor(T, i).finalize(K.ciphertext);
        },
        "_parse": function (I, K) {
            return "string" == typeof I ? K.parse(I, this) : I;
        }
    });
    var a = (a.kdf = {}).OpenSSL = {
        "execute": function (I, K, T, i) {
            return i || (i = S.random(8)), I = b.create({
                "keySize": K + T
            }).compute(I, i), T = S.create(I.words.slice(K), 4 * T), I.sigBytes = 4 * K, B.create({
                "key": I,
                "iv": T,
                "salt": i
            });
        }
    };
    var E = A.PasswordBasedCipher = F.extend({
        "cfg": F.cfg.extend({
            "kdf": a
        }),
        "encrypt": function (I, K, T, i) {
            return i = this.cfg.extend(i), T = i.kdf.execute(T, I.keySize, I.ivSize), i.iv = T.iv, I = F.encrypt.call(this, I, K, T.key, i), I.mixIn(T), I;
        },
        "decrypt": function (I, K, T, i) {
            return i = this.cfg.extend(i), K = this._parse(K, i.format), T = i.kdf.execute(T, I.keySize, I.ivSize, K.salt), i.iv = T.iv, F.decrypt.call(this, I, K, T.key, i);
        }
    });
}();

(function () {
    for (var p = CryptoJS, c = p.lib.BlockCipher, a = p.algo, L = [], S = [], Y = [], J = [], V = [], W = [], R = [], I = [], K = [], T = [], i = [], e = 0; 256 > e; e++) if (128 > e) {
        i[e] = e << 1;
    } else {
        i[e] = e << 1 ^ 283;
    }

    for (var Z = 0, M = 0, e = 0; 256 > e; e++) {
        var U = M ^ M << 1 ^ M << 2 ^ M << 3 ^ M << 4;
        var U = U >>> 8 ^ U & 255 ^ 99;
        L[Z] = U;
        S[U] = Z;
        var h = i[Z];
        var H = i[h];
        var O = i[H];
        var X = 257 * i[U] ^ 16843008 * U;
        Y[Z] = X << 24 | X >>> 8;
        J[Z] = X << 16 | X >>> 16;
        V[Z] = X << 8 | X >>> 24;
        W[Z] = X;
        X = 16843009 * O ^ 65537 * H ^ 257 * h ^ 16843008 * Z;
        R[U] = X << 24 | X >>> 8;
        I[U] = X << 16 | X >>> 16;
        K[U] = X << 8 | X >>> 24;
        T[U] = X;
        Z ? (Z = h ^ i[i[i[O ^ h]]], M ^= i[i[M]]) : Z = M = 1;
    }

    var G = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var a = a.AES = c.extend({
        "_doReset": function () {
            for (var N = this._key, o = N.words, m = N.sigBytes / 4, N = 4 * ((this._nRounds = m + 6) + 1), Q = this._keySchedule = [], P = 0; P < N; P++) if (P < m) Q[P] = o[P];else {
                var p0 = Q[P - 1];
                P % m ? 6 < m && 4 == P % m && (p0 = L[p0 >>> 24] << 24 | L[p0 >>> 16 & 255] << 16 | L[p0 >>> 8 & 255] << 8 | L[p0 & 255]) : (p0 = p0 << 8 | p0 >>> 24, p0 = L[p0 >>> 24] << 24 | L[p0 >>> 16 & 255] << 16 | L[p0 >>> 8 & 255] << 8 | L[p0 & 255], p0 ^= G[P / m | 0] << 24);
                Q[P] = Q[P - m] ^ p0;
            }

            o = this._invKeySchedule = [];

            for (m = 0; m < N; m++) {
                P = N - m;
                m % 4 ? p0 = Q[P] : p0 = Q[P - 4];
                4 > m || 4 >= P ? o[m] = p0 : o[m] = R[L[p0 >>> 24]] ^ I[L[p0 >>> 16 & 255]] ^ K[L[p0 >>> 8 & 255]] ^ T[L[p0 & 255]];
            }
        },
        "encryptBlock": function (N, o) {
            this._doCryptBlock(N, o, this._keySchedule, Y, J, V, W, L);
        },
        "decryptBlock": function (N, o) {
            var m = N[o + 1];
            N[o + 1] = N[o + 3];
            N[o + 3] = m;

            this._doCryptBlock(N, o, this._invKeySchedule, R, I, K, T, S);

            m = N[o + 1];
            N[o + 1] = N[o + 3];
            N[o + 3] = m;
        },
        "_doCryptBlock": function (N, o, Q, P, p0, p1, p2, p3) {
            for (var p4 = this._nRounds, p5 = N[o] ^ Q[0], p6 = N[o + 1] ^ Q[1], p7 = N[o + 2] ^ Q[2], p8 = N[o + 3] ^ Q[3], p9 = 4, pp = 1; pp < p4; pp++) var pn = P[p5 >>> 24] ^ p0[p6 >>> 16 & 255] ^ p1[p7 >>> 8 & 255] ^ p2[p8 & 255] ^ Q[p9++], pc = P[p6 >>> 24] ^ p0[p7 >>> 16 & 255] ^ p1[p8 >>> 8 & 255] ^ p2[p5 & 255] ^ Q[p9++], pa = P[p7 >>> 24] ^ p0[p8 >>> 16 & 255] ^ p1[p5 >>> 8 & 255] ^ p2[p6 & 255] ^ Q[p9++], p8 = P[p8 >>> 24] ^ p0[p5 >>> 16 & 255] ^ p1[p6 >>> 8 & 255] ^ p2[p7 & 255] ^ Q[p9++], p5 = pn, p6 = pc, p7 = pa;

            pn = (p3[p5 >>> 24] << 24 | p3[p6 >>> 16 & 255] << 16 | p3[p7 >>> 8 & 255] << 8 | p3[p8 & 255]) ^ Q[p9++];
            pc = (p3[p6 >>> 24] << 24 | p3[p7 >>> 16 & 255] << 16 | p3[p8 >>> 8 & 255] << 8 | p3[p5 & 255]) ^ Q[p9++];
            pa = (p3[p7 >>> 24] << 24 | p3[p8 >>> 16 & 255] << 16 | p3[p5 >>> 8 & 255] << 8 | p3[p6 & 255]) ^ Q[p9++];
            p8 = (p3[p8 >>> 24] << 24 | p3[p5 >>> 16 & 255] << 16 | p3[p6 >>> 8 & 255] << 8 | p3[p7 & 255]) ^ Q[p9++];
            N[o] = pn;
            N[o + 1] = pc;
            N[o + 2] = pa;
            N[o + 3] = p8;
        },
        "keySize": 8
    });
    p.AES = c._createHelper(a);
})();

(function () {
    function c(R, B) {
        var F = (this._lBlock >>> R ^ this._rBlock) & B;
        this._rBlock ^= F;
        this._lBlock ^= F << R;
    }

    function a(R, B) {
        var F = (this._rBlock >>> R ^ this._lBlock) & B;
        this._lBlock ^= F;
        this._rBlock ^= F << R;
    }

    var A = CryptoJS;
    var L = A.lib;
    var S = L.WordArray;
    var L = L.BlockCipher;
    var f = A.algo;
    var Y = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
    var J = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
    var b = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
    var C = [{
        "0": 8421888,
        268435456: 32768,
        536870912: 8421378,
        805306368: 2,
        1073741824: 512,
        1342177280: 8421890,
        1610612736: 8389122,
        1879048192: 8388608,
        2147483648: 514,
        2415919104: 8389120,
        2684354560: 33280,
        2952790016: 8421376,
        3221225472: 32770,
        3489660928: 8388610,
        3758096384: 0,
        4026531840: 33282,
        134217728: 0,
        402653184: 8421890,
        671088640: 33282,
        939524096: 32768,
        1207959552: 8421888,
        1476395008: 512,
        1744830464: 8421378,
        2013265920: 2,
        2281701376: 8389120,
        2550136832: 33280,
        2818572288: 8421376,
        3087007744: 8389122,
        3355443200: 8388610,
        3623878656: 32770,
        3892314112: 514,
        4160749568: 8388608,
        1: 32768,
        268435457: 2,
        536870913: 8421888,
        805306369: 8388608,
        1073741825: 8421378,
        1342177281: 33280,
        1610612737: 512,
        1879048193: 8389122,
        2147483649: 8421890,
        2415919105: 8421376,
        2684354561: 8388610,
        2952790017: 33282,
        3221225473: 514,
        3489660929: 8389120,
        3758096385: 32770,
        4026531841: 0,
        134217729: 8421890,
        402653185: 8421376,
        671088641: 8388608,
        939524097: 512,
        1207959553: 32768,
        1476395009: 8388610,
        1744830465: 2,
        2013265921: 33282,
        2281701377: 32770,
        2550136833: 8389122,
        2818572289: 514,
        3087007745: 8421888,
        3355443201: 8389120,
        3623878657: 0,
        3892314113: 33280,
        4160749569: 8421378
    }, {
        "0": 1074282512,
        16777216: 16384,
        33554432: 524288,
        50331648: 1074266128,
        67108864: 1073741840,
        83886080: 1074282496,
        100663296: 1073758208,
        117440512: 16,
        134217728: 540672,
        150994944: 1073758224,
        167772160: 1073741824,
        184549376: 540688,
        201326592: 524304,
        218103808: 0,
        234881024: 16400,
        251658240: 1074266112,
        8388608: 1073758208,
        25165824: 540688,
        41943040: 16,
        58720256: 1073758224,
        75497472: 1074282512,
        92274688: 1073741824,
        109051904: 524288,
        125829120: 1074266128,
        142606336: 524304,
        159383552: 0,
        176160768: 16384,
        192937984: 1074266112,
        209715200: 1073741840,
        226492416: 540672,
        243269632: 1074282496,
        260046848: 16400,
        268435456: 0,
        285212672: 1074266128,
        301989888: 1073758224,
        318767104: 1074282496,
        335544320: 1074266112,
        352321536: 16,
        369098752: 540688,
        385875968: 16384,
        402653184: 16400,
        419430400: 524288,
        436207616: 524304,
        452984832: 1073741840,
        469762048: 540672,
        486539264: 1073758208,
        503316480: 1073741824,
        520093696: 1074282512,
        276824064: 540688,
        293601280: 524288,
        310378496: 1074266112,
        327155712: 16384,
        343932928: 1073758208,
        360710144: 1074282512,
        377487360: 16,
        394264576: 1073741824,
        411041792: 1074282496,
        427819008: 1073741840,
        444596224: 1073758224,
        461373440: 524304,
        478150656: 0,
        494927872: 16400,
        511705088: 1074266128,
        528482304: 540672
    }, {
        "0": 260,
        1048576: 0,
        2097152: 67109120,
        3145728: 65796,
        4194304: 65540,
        5242880: 67108868,
        6291456: 67174660,
        7340032: 67174400,
        8388608: 67108864,
        9437184: 67174656,
        10485760: 65792,
        11534336: 67174404,
        12582912: 67109124,
        13631488: 65536,
        14680064: 4,
        15728640: 256,
        524288: 67174656,
        1572864: 67174404,
        2621440: 0,
        3670016: 67109120,
        4718592: 67108868,
        5767168: 65536,
        6815744: 65540,
        7864320: 260,
        8912896: 4,
        9961472: 256,
        11010048: 67174400,
        12058624: 65796,
        13107200: 65792,
        14155776: 67109124,
        15204352: 67174660,
        16252928: 67108864,
        16777216: 67174656,
        17825792: 65540,
        18874368: 65536,
        19922944: 67109120,
        20971520: 256,
        22020096: 67174660,
        23068672: 67108868,
        24117248: 0,
        25165824: 67109124,
        26214400: 67108864,
        27262976: 4,
        28311552: 65792,
        29360128: 67174400,
        30408704: 260,
        31457280: 65796,
        32505856: 67174404,
        17301504: 67108864,
        18350080: 260,
        19398656: 67174656,
        20447232: 0,
        21495808: 65540,
        22544384: 67109120,
        23592960: 256,
        24641536: 67174404,
        25690112: 65536,
        26738688: 67174660,
        27787264: 65796,
        28835840: 67108868,
        29884416: 67109124,
        30932992: 67174400,
        31981568: 4,
        33030144: 65792
    }, {
        "0": 2151682048,
        65536: 2147487808,
        131072: 4198464,
        196608: 2151677952,
        262144: 0,
        327680: 4198400,
        393216: 2147483712,
        458752: 4194368,
        524288: 2147483648,
        589824: 4194304,
        655360: 64,
        720896: 2147487744,
        786432: 2151678016,
        851968: 4160,
        917504: 4096,
        983040: 2151682112,
        32768: 2147487808,
        98304: 64,
        163840: 2151678016,
        229376: 2147487744,
        294912: 4198400,
        360448: 2151682112,
        425984: 0,
        491520: 2151677952,
        557056: 4096,
        622592: 2151682048,
        688128: 4194304,
        753664: 4160,
        819200: 2147483648,
        884736: 4194368,
        950272: 4198464,
        1015808: 2147483712,
        1048576: 4194368,
        1114112: 4198400,
        1179648: 2147483712,
        1245184: 0,
        1310720: 4160,
        1376256: 2151678016,
        1441792: 2151682048,
        1507328: 2147487808,
        1572864: 2151682112,
        1638400: 2147483648,
        1703936: 2151677952,
        1769472: 4198464,
        1835008: 2147487744,
        1900544: 4194304,
        1966080: 64,
        2031616: 4096,
        1081344: 2151677952,
        1146880: 2151682112,
        1212416: 0,
        1277952: 4198400,
        1343488: 4194368,
        1409024: 2147483648,
        1474560: 2147487808,
        1540096: 64,
        1605632: 2147483712,
        1671168: 4096,
        1736704: 2147487744,
        1802240: 2151678016,
        1867776: 4160,
        1933312: 2151682048,
        1998848: 4194304,
        2064384: 4198464
    }, {
        "0": 128,
        4096: 17039360,
        8192: 262144,
        12288: 536870912,
        16384: 537133184,
        20480: 16777344,
        24576: 553648256,
        28672: 262272,
        32768: 16777216,
        36864: 537133056,
        40960: 536871040,
        45056: 553910400,
        49152: 553910272,
        53248: 0,
        57344: 17039488,
        61440: 553648128,
        2048: 17039488,
        6144: 553648256,
        10240: 128,
        14336: 17039360,
        18432: 262144,
        22528: 537133184,
        26624: 553910272,
        30720: 536870912,
        34816: 537133056,
        38912: 0,
        43008: 553910400,
        47104: 16777344,
        51200: 536871040,
        55296: 553648128,
        59392: 16777216,
        63488: 262272,
        65536: 262144,
        69632: 128,
        73728: 536870912,
        77824: 553648256,
        81920: 16777344,
        86016: 553910272,
        90112: 537133184,
        94208: 16777216,
        98304: 553910400,
        102400: 553648128,
        106496: 17039360,
        110592: 537133056,
        114688: 262272,
        118784: 536871040,
        122880: 0,
        126976: 17039488,
        67584: 553648256,
        71680: 16777216,
        75776: 17039360,
        79872: 537133184,
        83968: 536870912,
        88064: 17039488,
        92160: 128,
        96256: 553910272,
        100352: 262272,
        104448: 553910400,
        108544: 0,
        112640: 553648128,
        116736: 16777344,
        120832: 262144,
        124928: 537133056,
        129024: 536871040
    }, {
        "0": 268435464,
        256: 8192,
        512: 270532608,
        768: 270540808,
        1024: 268443648,
        1280: 2097152,
        1536: 2097160,
        1792: 268435456,
        2048: 0,
        2304: 268443656,
        2560: 2105344,
        2816: 8,
        3072: 270532616,
        3328: 2105352,
        3584: 8200,
        3840: 270540800,
        128: 270532608,
        384: 270540808,
        640: 8,
        896: 2097152,
        1152: 2105352,
        1408: 268435464,
        1664: 268443648,
        1920: 8200,
        2176: 2097160,
        2432: 8192,
        2688: 268443656,
        2944: 270532616,
        3200: 0,
        3456: 270540800,
        3712: 2105344,
        3968: 268435456,
        4096: 268443648,
        4352: 270532616,
        4608: 270540808,
        4864: 8200,
        5120: 2097152,
        5376: 268435456,
        5632: 268435464,
        5888: 2105344,
        6144: 2105352,
        6400: 0,
        6656: 8,
        6912: 270532608,
        7168: 8192,
        7424: 268443656,
        7680: 270540800,
        7936: 2097160,
        4224: 8,
        4480: 2105344,
        4736: 2097152,
        4992: 268435464,
        5248: 268443648,
        5504: 8200,
        5760: 270540808,
        6016: 270532608,
        6272: 270540800,
        6528: 270532616,
        6784: 8192,
        7040: 2105352,
        7296: 2097160,
        7552: 0,
        7808: 268435456,
        8064: 268443656
    }, {
        "0": 1048576,
        16: 33555457,
        32: 1024,
        48: 1049601,
        64: 34604033,
        80: 0,
        96: 1,
        112: 34603009,
        128: 33555456,
        144: 1048577,
        160: 33554433,
        176: 34604032,
        192: 34603008,
        208: 1025,
        224: 1049600,
        240: 33554432,
        8: 34603009,
        24: 0,
        40: 33555457,
        56: 34604032,
        72: 1048576,
        88: 33554433,
        104: 33554432,
        120: 1025,
        136: 1049601,
        152: 33555456,
        168: 34603008,
        184: 1048577,
        200: 1024,
        216: 34604033,
        232: 1,
        248: 1049600,
        256: 33554432,
        272: 1048576,
        288: 33555457,
        304: 34603009,
        320: 1048577,
        336: 33555456,
        352: 34604032,
        368: 1049601,
        384: 1025,
        400: 34604033,
        416: 1049600,
        432: 1,
        448: 0,
        464: 34603008,
        480: 33554433,
        496: 1024,
        264: 1049600,
        280: 33555457,
        296: 34603009,
        312: 1,
        328: 33554432,
        344: 1048576,
        360: 1025,
        376: 34604032,
        392: 33554433,
        408: 34603008,
        424: 0,
        440: 34604033,
        456: 1049601,
        472: 1024,
        488: 33555456,
        504: 1048577
    }, {
        "0": 134219808,
        1: 131072,
        2: 134217728,
        3: 32,
        4: 131104,
        5: 134350880,
        6: 134350848,
        7: 2048,
        8: 134348800,
        9: 134219776,
        10: 133120,
        11: 134348832,
        12: 2080,
        13: 0,
        14: 134217760,
        15: 133152,
        2147483648: 2048,
        2147483649: 134350880,
        2147483650: 134219808,
        2147483651: 134217728,
        2147483652: 134348800,
        2147483653: 133120,
        2147483654: 133152,
        2147483655: 32,
        2147483656: 134217760,
        2147483657: 2080,
        2147483658: 131104,
        2147483659: 134350848,
        2147483660: 0,
        2147483661: 134348832,
        2147483662: 134219776,
        2147483663: 131072,
        16: 133152,
        17: 134350848,
        18: 32,
        19: 2048,
        20: 134219776,
        21: 134217760,
        22: 134348832,
        23: 131072,
        24: 0,
        25: 131104,
        26: 134348800,
        27: 134219808,
        28: 134350880,
        29: 133120,
        30: 2080,
        31: 134217728,
        2147483664: 131072,
        2147483665: 2048,
        2147483666: 134348832,
        2147483667: 133152,
        2147483668: 32,
        2147483669: 134348800,
        2147483670: 134217728,
        2147483671: 134219808,
        2147483672: 134350880,
        2147483673: 134217760,
        2147483674: 134219776,
        2147483675: 0,
        2147483676: 133120,
        2147483677: 2080,
        2147483678: 131104,
        2147483679: 134350848
    }];
    var V = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
    var W = f.DES = L.extend({
        "_doReset": function () {
            for (var R = this._key.words, B = [], F = 0; 56 > F; F++) {
                var E = Y[F] - 1;
                B[F] = R[E >>> 5] >>> 31 - E % 32 & 1;
            }

            R = this._subKeys = [];

            for (E = 0; 16 > E; E++) {
                for (var I = R[E] = [], K = b[E], F = 0; 24 > F; F++) {
                    I[F / 6 | 0] |= B[(J[F] - 1 + K) % 28] << 31 - F % 6;
                    I[4 + (F / 6 | 0)] |= B[28 + (J[F + 24] - 1 + K) % 28] << 31 - F % 6;
                }

                I[0] = I[0] << 1 | I[0] >>> 31;

                for (F = 1; 7 > F; F++) I[F] >>>= 4 * (F - 1) + 3;

                I[7] = I[7] << 5 | I[7] >>> 27;
            }

            B = this._invSubKeys = [];

            for (F = 0; 16 > F; F++) B[F] = R[15 - F];
        },
        "encryptBlock": function (R, B) {
            this._doCryptBlock(R, B, this._subKeys);
        },
        "decryptBlock": function (R, B) {
            this._doCryptBlock(R, B, this._invSubKeys);
        },
        "_doCryptBlock": function (R, B, F) {
            this._lBlock = R[B];
            this._rBlock = R[B + 1];
            c.call(this, 4, 252645135);
            c.call(this, 16, 65535);
            a.call(this, 2, 858993459);
            a.call(this, 8, 16711935);
            c.call(this, 1, 1431655765);

            for (var E = 0; 16 > E; E++) {
                for (var I = F[E], K = this._lBlock, T = this._rBlock, i = 0, Z = 0; 8 > Z; Z++) i |= C[Z][((T ^ I[Z]) & V[Z]) >>> 0];

                this._lBlock = T;
                this._rBlock = K ^ i;
            }

            F = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = F;
            c.call(this, 1, 1431655765);
            a.call(this, 8, 16711935);
            a.call(this, 2, 858993459);
            c.call(this, 16, 65535);
            c.call(this, 4, 252645135);
            R[B] = this._lBlock;
            R[B + 1] = this._rBlock;
        },
        "keySize": 2,
        "ivSize": 2,
        "blockSize": 2
    });
    A.DES = L._createHelper(W);
    f = f.TripleDES = L.extend({
        "_doReset": function () {
            var R = this._key.words;
            this._des1 = W.createEncryptor(S.create(R.slice(0, 2)));
            this._des2 = W.createEncryptor(S.create(R.slice(2, 4)));
            this._des3 = W.createEncryptor(S.create(R.slice(4, 6)));
        },
        "encryptBlock": function (R, B) {
            this._des1.encryptBlock(R, B);

            this._des2.decryptBlock(R, B);

            this._des3.encryptBlock(R, B);
        },
        "decryptBlock": function (R, B) {
            this._des3.decryptBlock(R, B);

            this._des2.encryptBlock(R, B);

            this._des1.decryptBlock(R, B);
        },
        "keySize": 6,
        "ivSize": 2,
        "blockSize": 2
    });
    A.TripleDES = L._createHelper(f);
})();

(function () {
    var p = CryptoJS;
    var n = p.lib.WordArray;
    p.enc.Base64 = {
        "stringify": function (A) {
            var L = A.words;
            var S = A.sigBytes;
            var Y = this._map;
            A.clamp();
            A = [];

            for (var J = 0; J < S; J += 3) for (var C = (L[J >>> 2] >>> 24 - 8 * (J % 4) & 255) << 16 | (L[J + 1 >>> 2] >>> 24 - 8 * ((J + 1) % 4) & 255) << 8 | L[J + 2 >>> 2] >>> 24 - 8 * ((J + 2) % 4) & 255, V = 0; 4 > V && J + 0.75 * V < S; V++) A.push(Y.charAt(C >>> 6 * (3 - V) & 63));

            if (L = Y.charAt(64)) {
                for (; A.length % 4;) A.push(L);
            }

            return A.join("");
        },
        "parse": function (A) {
            var L = A.length;
            var S = this._map;
            var Y = S.charAt(64);

            if (Y) {
                Y = A.indexOf(Y);
                -1 != Y && (L = Y);
            }

            for (var Y = [], J = 0, C = 0; C < L; C++) if (C % 4) {
                var V = S.indexOf(A.charAt(C - 1)) << 2 * (C % 4);
                var W = S.indexOf(A.charAt(C)) >>> 6 - 2 * (C % 4);
                Y[J >>> 2] |= (V | W) << 24 - 8 * (J % 4);
                J++;
            }

            return n.create(Y, J);
        },
        "_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
})();

(function (p) {
    function c(V, W, R, B, I, K, T) {
        return V = V + (W & R | ~W & B) + I + T, (V << K | V >>> 32 - K) + W;
    }

    function A(V, W, R, B, I, K, T) {
        return V = V + (W & B | R & ~B) + I + T, (V << K | V >>> 32 - K) + W;
    }

    function L(V, W, R, B, I, K, T) {
        return V = V + (W ^ R ^ B) + I + T, (V << K | V >>> 32 - K) + W;
    }

    function g(V, W, R, B, I, K, T) {
        return V = V + (R ^ (W | ~B)) + I + T, (V << K | V >>> 32 - K) + W;
    }

    for (var S = CryptoJS, f = S.lib, Y = f.WordArray, J = f.Hasher, f = S.algo, b = [], C = 0; 64 > C; C++) b[C] = 4294967296 * p.abs(p.sin(C + 1)) | 0;

    f = f.MD5 = J.extend({
        "_doReset": function () {
            this._hash = new Y.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        "_doProcessBlock": function (V, W) {
            for (var R = 0; 16 > R; R++) {
                var I = W + R;
                var K = V[I];
                V[I] = (K << 8 | K >>> 24) & 16711935 | (K << 24 | K >>> 8) & 4278255360;
            }

            var R = this._hash.words;
            var I = V[W + 0];
            var K = V[W + 1];
            var T = V[W + 2];
            var i = V[W + 3];
            var Z = V[W + 4];
            var M = V[W + 5];
            var U = V[W + 6];
            var H = V[W + 7];
            var O = V[W + 8];
            var X = V[W + 9];
            var G = V[W + 10];
            var N = V[W + 11];
            var o = V[W + 12];
            var Q = V[W + 13];
            var P = V[W + 14];
            var p0 = V[W + 15];
            var p1 = R[0];
            var p2 = R[1];
            var p3 = R[2];
            var p4 = R[3];
            var p1 = c(p1, p2, p3, p4, I, 7, b[0]);
            var p4 = c(p4, p1, p2, p3, K, 12, b[1]);
            var p3 = c(p3, p4, p1, p2, T, 17, b[2]);
            var p2 = c(p2, p3, p4, p1, i, 22, b[3]);
            var p1 = c(p1, p2, p3, p4, Z, 7, b[4]);
            var p4 = c(p4, p1, p2, p3, M, 12, b[5]);
            var p3 = c(p3, p4, p1, p2, U, 17, b[6]);
            var p2 = c(p2, p3, p4, p1, H, 22, b[7]);
            var p1 = c(p1, p2, p3, p4, O, 7, b[8]);
            var p4 = c(p4, p1, p2, p3, X, 12, b[9]);
            var p3 = c(p3, p4, p1, p2, G, 17, b[10]);
            var p2 = c(p2, p3, p4, p1, N, 22, b[11]);
            var p1 = c(p1, p2, p3, p4, o, 7, b[12]);
            var p4 = c(p4, p1, p2, p3, Q, 12, b[13]);
            var p3 = c(p3, p4, p1, p2, P, 17, b[14]);
            var p2 = c(p2, p3, p4, p1, p0, 22, b[15]);
            var p1 = A(p1, p2, p3, p4, K, 5, b[16]);
            var p4 = A(p4, p1, p2, p3, U, 9, b[17]);
            var p3 = A(p3, p4, p1, p2, N, 14, b[18]);
            var p2 = A(p2, p3, p4, p1, I, 20, b[19]);
            var p1 = A(p1, p2, p3, p4, M, 5, b[20]);
            var p4 = A(p4, p1, p2, p3, G, 9, b[21]);
            var p3 = A(p3, p4, p1, p2, p0, 14, b[22]);
            var p2 = A(p2, p3, p4, p1, Z, 20, b[23]);
            var p1 = A(p1, p2, p3, p4, X, 5, b[24]);
            var p4 = A(p4, p1, p2, p3, P, 9, b[25]);
            var p3 = A(p3, p4, p1, p2, i, 14, b[26]);
            var p2 = A(p2, p3, p4, p1, O, 20, b[27]);
            var p1 = A(p1, p2, p3, p4, Q, 5, b[28]);
            var p4 = A(p4, p1, p2, p3, T, 9, b[29]);
            var p3 = A(p3, p4, p1, p2, H, 14, b[30]);
            var p2 = A(p2, p3, p4, p1, o, 20, b[31]);
            var p1 = L(p1, p2, p3, p4, M, 4, b[32]);
            var p4 = L(p4, p1, p2, p3, O, 11, b[33]);
            var p3 = L(p3, p4, p1, p2, N, 16, b[34]);
            var p2 = L(p2, p3, p4, p1, P, 23, b[35]);
            var p1 = L(p1, p2, p3, p4, K, 4, b[36]);
            var p4 = L(p4, p1, p2, p3, Z, 11, b[37]);
            var p3 = L(p3, p4, p1, p2, H, 16, b[38]);
            var p2 = L(p2, p3, p4, p1, G, 23, b[39]);
            var p1 = L(p1, p2, p3, p4, Q, 4, b[40]);
            var p4 = L(p4, p1, p2, p3, I, 11, b[41]);
            var p3 = L(p3, p4, p1, p2, i, 16, b[42]);
            var p2 = L(p2, p3, p4, p1, U, 23, b[43]);
            var p1 = L(p1, p2, p3, p4, X, 4, b[44]);
            var p4 = L(p4, p1, p2, p3, o, 11, b[45]);
            var p3 = L(p3, p4, p1, p2, p0, 16, b[46]);
            var p2 = L(p2, p3, p4, p1, T, 23, b[47]);
            var p1 = g(p1, p2, p3, p4, I, 6, b[48]);
            var p4 = g(p4, p1, p2, p3, H, 10, b[49]);
            var p3 = g(p3, p4, p1, p2, P, 15, b[50]);
            var p2 = g(p2, p3, p4, p1, M, 21, b[51]);
            var p1 = g(p1, p2, p3, p4, o, 6, b[52]);
            var p4 = g(p4, p1, p2, p3, i, 10, b[53]);
            var p3 = g(p3, p4, p1, p2, G, 15, b[54]);
            var p2 = g(p2, p3, p4, p1, K, 21, b[55]);
            var p1 = g(p1, p2, p3, p4, O, 6, b[56]);
            var p4 = g(p4, p1, p2, p3, p0, 10, b[57]);
            var p3 = g(p3, p4, p1, p2, U, 15, b[58]);
            var p2 = g(p2, p3, p4, p1, Q, 21, b[59]);
            var p1 = g(p1, p2, p3, p4, Z, 6, b[60]);
            var p4 = g(p4, p1, p2, p3, N, 10, b[61]);
            var p3 = g(p3, p4, p1, p2, T, 15, b[62]);
            var p2 = g(p2, p3, p4, p1, X, 21, b[63]);
            R[0] = R[0] + p1 | 0;
            R[1] = R[1] + p2 | 0;
            R[2] = R[2] + p3 | 0;
            R[3] = R[3] + p4 | 0;
        },
        "_doFinalize": function () {
            var V = this._data;
            var W = V.words;
            var R = 8 * this._nDataBytes;
            var B = 8 * V.sigBytes;
            W[B >>> 5] |= 128 << 24 - B % 32;
            var I = p.floor(R / 4294967296);
            W[(B + 64 >>> 9 << 4) + 15] = (I << 8 | I >>> 24) & 16711935 | (I << 24 | I >>> 8) & 4278255360;
            W[(B + 64 >>> 9 << 4) + 14] = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360;
            V.sigBytes = 4 * (W.length + 1);

            this._process();

            V = this._hash;
            W = V.words;

            for (R = 0; 4 > R; R++) {
                B = W[R];
                W[R] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
            }

            return V;
        },
        "clone": function () {
            var V = J.clone.call(this);
            return V._hash = this._hash.clone(), V;
        }
    });
    S.MD5 = J._createHelper(f);
    S.HmacMD5 = J._createHmacHelper(f);
})(Math);

(function () {
    var p = CryptoJS;
    var n = p.lib;
    var c = n.WordArray;
    var a = n.Hasher;
    var A = [];
    var n = p.algo.SHA1 = a.extend({
        "_doReset": function () {
            this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        "_doProcessBlock": function (L, S) {
            for (var Y = this._hash.words, J = Y[0], C = Y[1], V = Y[2], W = Y[3], R = Y[4], B = 0; 80 > B; B++) {
                if (16 > B) A[B] = L[S + B] | 0;else {
                    var F = A[B - 3] ^ A[B - 8] ^ A[B - 14] ^ A[B - 16];
                    A[B] = F << 1 | F >>> 31;
                }
                F = (J << 5 | J >>> 27) + R + A[B];
                20 > B ? F = F + ((C & V | ~C & W) + 1518500249) : 40 > B ? F = F + ((C ^ V ^ W) + 1859775393) : 60 > B ? F = F + ((C & V | C & W | V & W) - 1894007588) : F = F + ((C ^ V ^ W) - 899497514);
                R = W;
                W = V;
                V = C << 30 | C >>> 2;
                C = J;
                J = F;
            }

            Y[0] = Y[0] + J | 0;
            Y[1] = Y[1] + C | 0;
            Y[2] = Y[2] + V | 0;
            Y[3] = Y[3] + W | 0;
            Y[4] = Y[4] + R | 0;
        },
        "_doFinalize": function () {
            var L = this._data;
            var g = L.words;
            var S = 8 * this._nDataBytes;
            var f = 8 * L.sigBytes;
            return g[f >>> 5] |= 128 << 24 - f % 32, g[(f + 64 >>> 9 << 4) + 14] = Math.floor(S / 4294967296), g[(f + 64 >>> 9 << 4) + 15] = S, L.sigBytes = 4 * g.length, this._process(), this._hash;
        },
        "clone": function () {
            var L = a.clone.call(this);
            return L._hash = this._hash.clone(), L;
        }
    });
    p.SHA1 = a._createHelper(n);
    p.HmacSHA1 = a._createHmacHelper(n);
})();

(function (p) {
    for (var c = CryptoJS, a = c.lib, A = a.WordArray, L = a.Hasher, a = c.algo, S = [], f = [], Y = function (F) {
        return 4294967296 * (F - (F | 0)) | 0;
    }, J = 2, C = 0; 64 > C;) {
        var V;

        F: {
            V = J;

            for (var W = p.sqrt(V), R = 2; R <= W; R++) if (!(V % R)) {
                V = !1;
                break F;
            }

            V = !0;
        }

        V && (8 > C && (S[C] = Y(p.pow(J, 0.5))), f[C] = Y(p.pow(J, 0.3333333333333333)), C++);
        J++;
    }

    var B = [];
    var a = a.SHA256 = L.extend({
        "_doReset": function () {
            this._hash = new A.init(S.slice(0));
        },
        "_doProcessBlock": function (F, E) {
            for (var I = this._hash.words, K = I[0], T = I[1], i = I[2], Z = I[3], M = I[4], U = I[5], H = I[6], O = I[7], X = 0; 64 > X; X++) {
                if (16 > X) B[X] = F[E + X] | 0;else {
                    var G = B[X - 15];
                    var x = B[X - 2];
                    B[X] = ((G << 25 | G >>> 7) ^ (G << 14 | G >>> 18) ^ G >>> 3) + B[X - 7] + ((x << 15 | x >>> 17) ^ (x << 13 | x >>> 19) ^ x >>> 10) + B[X - 16];
                }
                G = O + ((M << 26 | M >>> 6) ^ (M << 21 | M >>> 11) ^ (M << 7 | M >>> 25)) + (M & U ^ ~M & H) + f[X] + B[X];
                x = ((K << 30 | K >>> 2) ^ (K << 19 | K >>> 13) ^ (K << 10 | K >>> 22)) + (K & T ^ K & i ^ T & i);
                O = H;
                H = U;
                U = M;
                M = Z + G | 0;
                Z = i;
                i = T;
                T = K;
                K = G + x | 0;
            }

            I[0] = I[0] + K | 0;
            I[1] = I[1] + T | 0;
            I[2] = I[2] + i | 0;
            I[3] = I[3] + Z | 0;
            I[4] = I[4] + M | 0;
            I[5] = I[5] + U | 0;
            I[6] = I[6] + H | 0;
            I[7] = I[7] + O | 0;
        },
        "_doFinalize": function () {
            var F = this._data;
            var E = F.words;
            var I = 8 * this._nDataBytes;
            var K = 8 * F.sigBytes;
            return E[K >>> 5] |= 128 << 24 - K % 32, E[(K + 64 >>> 9 << 4) + 14] = p.floor(I / 4294967296), E[(K + 64 >>> 9 << 4) + 15] = I, F.sigBytes = 4 * E.length, this._process(), this._hash;
        },
        "clone": function () {
            var F = L.clone.call(this);
            return F._hash = this._hash.clone(), F;
        }
    });
    c.SHA256 = L._createHelper(a);
    c.HmacSHA256 = L._createHmacHelper(a);
})(Math);

(function () {
    var p = CryptoJS;
    var n = p.lib.WordArray;
    var A = p.algo;
    var L = A.SHA256;
    var A = A.SHA224 = L.extend({
        "_doReset": function () {
            this._hash = new n.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
        },
        "_doFinalize": function () {
            var g = L._doFinalize.call(this);

            return g.sigBytes -= 4, g;
        }
    });
    p.SHA224 = L._createHelper(A);
    p.HmacSHA224 = L._createHmacHelper(A);
})();

(function () {
    function p() {
        return g.create.apply(g, arguments);
    }

    for (var c = CryptoJS, A = c.lib.Hasher, L = c.x64, g = L.Word, S = L.WordArray, L = c.algo, f = [p(1116352408, 3609767458), p(1899447441, 602891725), p(3049323471, 3964484399), p(3921009573, 2173295548), p(961987163, 4081628472), p(1508970993, 3053834265), p(2453635748, 2937671579), p(2870763221, 3664609560), p(3624381080, 2734883394), p(310598401, 1164996542), p(607225278, 1323610764), p(1426881987, 3590304994), p(1925078388, 4068182383), p(2162078206, 991336113), p(2614888103, 633803317), p(3248222580, 3479774868), p(3835390401, 2666613458), p(4022224774, 944711139), p(264347078, 2341262773), p(604807628, 2007800933), p(770255983, 1495990901), p(1249150122, 1856431235), p(1555081692, 3175218132), p(1996064986, 2198950837), p(2554220882, 3999719339), p(2821834349, 766784016), p(2952996808, 2566594879), p(3210313671, 3203337956), p(3336571891, 1034457026), p(3584528711, 2466948901), p(113926993, 3758326383), p(338241895, 168717936), p(666307205, 1188179964), p(773529912, 1546045734), p(1294757372, 1522805485), p(1396182291, 2643833823), p(1695183700, 2343527390), p(1986661051, 1014477480), p(2177026350, 1206759142), p(2456956037, 344077627), p(2730485921, 1290863460), p(2820302411, 3158454273), p(3259730800, 3505952657), p(3345764771, 106217008), p(3516065817, 3606008344), p(3600352804, 1432725776), p(4094571909, 1467031594), p(275423344, 851169720), p(430227734, 3100823752), p(506948616, 1363258195), p(659060556, 3750685593), p(883997877, 3785050280), p(958139571, 3318307427), p(1322822218, 3812723403), p(1537002063, 2003034995), p(1747873779, 3602036899), p(1955562222, 1575990012), p(2024104815, 1125592928), p(2227730452, 2716904306), p(2361852424, 442776044), p(2428436474, 593698344), p(2756734187, 3733110249), p(3204031479, 2999351573), p(3329325298, 3815920427), p(3391569614, 3928383900), p(3515267271, 566280711), p(3940187606, 3454069534), p(4118630271, 4000239992), p(116418474, 1914138554), p(174292421, 2731055270), p(289380356, 3203993006), p(460393269, 320620315), p(685471733, 587496836), p(852142971, 1086792851), p(1017036298, 365543100), p(1126000580, 2618297676), p(1288033470, 3409855158), p(1501505948, 4234509866), p(1607167915, 987167468), p(1816402316, 1246189591)], Y = [], J = 0; 80 > J; J++) Y[J] = p();

    L = L.SHA512 = A.extend({
        "_doReset": function () {
            this._hash = new S.init([new g.init(1779033703, 4089235720), new g.init(3144134277, 2227873595), new g.init(1013904242, 4271175723), new g.init(2773480762, 1595750129), new g.init(1359893119, 2917565137), new g.init(2600822924, 725511199), new g.init(528734635, 4215389547), new g.init(1541459225, 327033209)]);
        },
        "_doProcessBlock": function (i, o) {
            for (var p0 = this._hash.words, p1 = p0[0], p2 = p0[1], p3 = p0[2], p4 = p0[3], p5 = p0[4], p6 = p0[5], p7 = p0[6], p0 = p0[7], p8 = p1.high, p9 = p1.low, pp = p2.high, pn = p2.low, pc = p3.high, pa = p3.low, pA = p4.high, pL = p4.low, pg = p5.high, pS = p5.low, pf = p6.high, pY = p6.low, pJ = p7.high, pb = p7.low, pC = p0.high, pV = p0.low, pW = p8, pl = p9, pR = pp, pB = pn, pF = pc, pE = pa, ps = pA, pI = pL, pK = pg, pT = pS, pi = pf, pe = pY, pZ = pJ, pw = pb, pM = pC, pu = pV, pk = 0; 80 > pk; pk++) {
                var pq = Y[pk];

                if (16 > pk) {
                    var pU = pq.high = i[o + 2 * pk] | 0;
                    var pz = pq.low = i[o + 2 * pk + 1] | 0;
                } else {
                    var pU = Y[pk - 15];
                    var pz = pU.high;
                    var ph = pU.low;
                    var pU = (pz >>> 1 | ph << 31) ^ (pz >>> 8 | ph << 24) ^ pz >>> 7;
                    var ph = (ph >>> 1 | pz << 31) ^ (ph >>> 8 | pz << 24) ^ (ph >>> 7 | pz << 25);
                    var pH = Y[pk - 2];
                    var pz = pH.high;
                    var pj = pH.low;
                    var pH = (pz >>> 19 | pj << 13) ^ (pz << 3 | pj >>> 29) ^ pz >>> 6;
                    var pj = (pj >>> 19 | pz << 13) ^ (pj << 3 | pz >>> 29) ^ (pj >>> 6 | pz << 26);
                    var pz = Y[pk - 7];
                    var pO = pz.high;
                    var pt = Y[pk - 16];
                    var pX = pt.high;
                    var pt = pt.low;
                    var pz = ph + pz.low;
                    var pU = pU + pO + (pz >>> 0 < ph >>> 0 ? 1 : 0);
                    var pz = pz + pj;
                    var pU = pU + pH + (pz >>> 0 < pj >>> 0 ? 1 : 0);
                    var pz = pz + pt;
                    var pU = pU + pX + (pz >>> 0 < pt >>> 0 ? 1 : 0);
                    pq.high = pU;
                    pq.low = pz;
                }

                var pO = pK & pi ^ ~pK & pZ;
                var pt = pT & pe ^ ~pT & pw;
                var pq = pW & pR ^ pW & pF ^ pR & pF;
                var pG = pl & pB ^ pl & pE ^ pB & pE;
                var ph = (pW >>> 28 | pl << 4) ^ (pW << 30 | pl >>> 2) ^ (pW << 25 | pl >>> 7);
                var pH = (pl >>> 28 | pW << 4) ^ (pl << 30 | pW >>> 2) ^ (pl << 25 | pW >>> 7);
                var pj = f[pk];
                var px = pj.high;
                var pN = pj.low;
                var pj = pu + ((pT >>> 14 | pK << 18) ^ (pT >>> 18 | pK << 14) ^ (pT << 23 | pK >>> 9));
                var pX = pM + ((pK >>> 14 | pT << 18) ^ (pK >>> 18 | pT << 14) ^ (pK << 23 | pT >>> 9)) + (pj >>> 0 < pu >>> 0 ? 1 : 0);
                var pj = pj + pt;
                var pX = pX + pO + (pj >>> 0 < pt >>> 0 ? 1 : 0);
                var pj = pj + pN;
                var pX = pX + px + (pj >>> 0 < pN >>> 0 ? 1 : 0);
                var pj = pj + pz;
                var pX = pX + pU + (pj >>> 0 < pz >>> 0 ? 1 : 0);
                var pz = pH + pG;
                var pq = ph + pq + (pz >>> 0 < pH >>> 0 ? 1 : 0);
                var pM = pZ;
                var pu = pw;
                var pZ = pi;
                var pw = pe;
                var pi = pK;
                var pe = pT;
                var pT = pI + pj | 0;
                var pK = ps + pX + (pT >>> 0 < pI >>> 0 ? 1 : 0) | 0;
                var ps = pF;
                var pI = pE;
                var pF = pR;
                var pE = pB;
                var pR = pW;
                var pB = pl;
                var pl = pj + pz | 0;
                var pW = pX + pq + (pl >>> 0 < pj >>> 0 ? 1 : 0) | 0;
            }

            p9 = p1.low = p9 + pl;
            p1.high = p8 + pW + (p9 >>> 0 < pl >>> 0 ? 1 : 0);
            pn = p2.low = pn + pB;
            p2.high = pp + pR + (pn >>> 0 < pB >>> 0 ? 1 : 0);
            pa = p3.low = pa + pE;
            p3.high = pc + pF + (pa >>> 0 < pE >>> 0 ? 1 : 0);
            pL = p4.low = pL + pI;
            p4.high = pA + ps + (pL >>> 0 < pI >>> 0 ? 1 : 0);
            pS = p5.low = pS + pT;
            p5.high = pg + pK + (pS >>> 0 < pT >>> 0 ? 1 : 0);
            pY = p6.low = pY + pe;
            p6.high = pf + pi + (pY >>> 0 < pe >>> 0 ? 1 : 0);
            pb = p7.low = pb + pw;
            p7.high = pJ + pZ + (pb >>> 0 < pw >>> 0 ? 1 : 0);
            pV = p0.low = pV + pu;
            p0.high = pC + pM + (pV >>> 0 < pu >>> 0 ? 1 : 0);
        },
        "_doFinalize": function () {
            var b = this._data;
            var C = b.words;
            var V = 8 * this._nDataBytes;
            var W = 8 * b.sigBytes;
            return C[W >>> 5] |= 128 << 24 - W % 32, C[(W + 128 >>> 10 << 5) + 30] = Math.floor(V / 4294967296), C[(W + 128 >>> 10 << 5) + 31] = V, b.sigBytes = 4 * C.length, this._process(), this._hash.toX32();
        },
        "clone": function () {
            var b = A.clone.call(this);
            return b._hash = this._hash.clone(), b;
        },
        "blockSize": 32
    });
    c.SHA512 = A._createHelper(L);
    c.HmacSHA512 = A._createHmacHelper(L);
})();

(function () {
    var p = CryptoJS;
    var n = p.x64;
    var A = n.Word;
    var L = n.WordArray;
    var n = p.algo;
    var g = n.SHA512;
    var n = n.SHA384 = g.extend({
        "_doReset": function () {
            this._hash = new L.init([new A.init(3418070365, 3238371032), new A.init(1654270250, 914150663), new A.init(2438529370, 812702999), new A.init(355462360, 4144912697), new A.init(1731405415, 4290775857), new A.init(2394180231, 1750603025), new A.init(3675008525, 1694076839), new A.init(1203062813, 3204075428)]);
        },
        "_doFinalize": function () {
            var S = g._doFinalize.call(this);

            return S.sigBytes -= 16, S;
        }
    });
    p.SHA384 = g._createHelper(n);
    p.HmacSHA384 = g._createHmacHelper(n);
})();

(function () {
    var c = CryptoJS;
    var a = c.lib;
    var L = a.WordArray;
    var g = a.Hasher;
    var a = c.algo;
    var S = L.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
    var f = L.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
    var Y = L.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
    var J = L.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
    var b = L.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
    var V = L.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
    var a = a.RIPEMD160 = g.extend({
        "_doReset": function () {
            this._hash = L.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
        },
        "_doProcessBlock": function (W, R) {
            for (var F = 0; 16 > F; F++) {
                var E = R + F;
                var I = W[E];
                W[E] = (I << 8 | I >>> 24) & 16711935 | (I << 24 | I >>> 8) & 4278255360;
            }

            var E = this._hash.words;
            var I = b.words;
            var K = V.words;
            var T = S.words;
            var i = f.words;
            var Z = Y.words;
            var M = J.words;
            var U;
            var H;
            var O;
            var X;
            var G;
            var N;
            var D;
            var o;
            var Q;
            var P;
            N = U = E[0];
            D = H = E[1];
            o = O = E[2];
            Q = X = E[3];
            P = G = E[4];

            for (var p0, F = 0; 80 > F; F += 1) {
                p0 = U + W[R + T[F]] | 0;
                16 > F ? p0 = p0 + ((H ^ O ^ X) + I[0]) : 32 > F ? p0 = p0 + ((H & O | ~H & X) + I[1]) : 48 > F ? p0 = p0 + (((H | ~O) ^ X) + I[2]) : 64 > F ? p0 = p0 + ((H & X | O & ~X) + I[3]) : p0 = p0 + ((H ^ (O | ~X)) + I[4]);
                p0 |= 0;
                p0 = p0 << Z[F] | p0 >>> 32 - Z[F];
                p0 = p0 + G | 0;
                U = G;
                G = X;
                X = O << 10 | O >>> 22;
                O = H;
                H = p0;
                p0 = N + W[R + i[F]] | 0;
                16 > F ? p0 = p0 + ((D ^ (o | ~Q)) + K[0]) : 32 > F ? p0 = p0 + ((D & Q | o & ~Q) + K[1]) : 48 > F ? p0 = p0 + (((D | ~o) ^ Q) + K[2]) : 64 > F ? p0 = p0 + ((D & o | ~D & Q) + K[3]) : p0 = p0 + ((D ^ o ^ Q) + K[4]);
                p0 |= 0;
                p0 = p0 << M[F] | p0 >>> 32 - M[F];
                p0 = p0 + P | 0;
                N = P;
                P = Q;
                Q = o << 10 | o >>> 22;
                o = D;
                D = p0;
            }

            p0 = E[1] + O + Q | 0;
            E[1] = E[2] + X + P | 0;
            E[2] = E[3] + G + N | 0;
            E[3] = E[4] + U + D | 0;
            E[4] = E[0] + H + o | 0;
            E[0] = p0;
        },
        "_doFinalize": function () {
            var W = this._data;
            var l = W.words;
            var R = 8 * this._nDataBytes;
            var F = 8 * W.sigBytes;
            l[F >>> 5] |= 128 << 24 - F % 32;
            l[(F + 64 >>> 9 << 4) + 14] = (R << 8 | R >>> 24) & 16711935 | (R << 24 | R >>> 8) & 4278255360;
            W.sigBytes = 4 * (l.length + 1);

            this._process();

            W = this._hash;
            l = W.words;

            for (R = 0; 5 > R; R++) {
                F = l[R];
                l[R] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360;
            }

            return W;
        },
        "clone": function () {
            var W = g.clone.call(this);
            return W._hash = this._hash.clone(), W;
        }
    });
    c.RIPEMD160 = g._createHelper(a);
    c.HmacRIPEMD160 = g._createHmacHelper(a);
})(Math);

(function () {
    var p = CryptoJS;
    var n = p.enc.Utf8;
    p.algo.HMAC = p.lib.Base.extend({
        "init": function (A, L) {
            A = this._hasher = new A.init();
            "string" == typeof L && (L = n.parse(L));
            var S = A.blockSize;
            var Y = 4 * S;
            L.sigBytes > Y && (L = A.finalize(L));
            L.clamp();

            for (var J = this._oKey = L.clone(), C = this._iKey = L.clone(), V = J.words, W = C.words, l = 0; l < S; l++) {
                V[l] ^= 1549556828;
                W[l] ^= 909522486;
            }

            J.sigBytes = C.sigBytes = Y;
            this.reset();
        },
        "reset": function () {
            var A = this._hasher;
            A.reset();
            A.update(this._iKey);
        },
        "update": function (A) {
            return this._hasher.update(A), this;
        },
        "finalize": function (A) {
            var L = this._hasher;
            return A = L.finalize(A), L.reset(), L.finalize(this._oKey.clone().concat(A));
        }
    });
})();

(function () {
    var p = CryptoJS;
    var n = p.lib;
    var c = n.Base;
    var A = n.WordArray;
    var n = p.algo;
    var L = n.HMAC;
    var g = n.PBKDF2 = c.extend({
        "cfg": c.extend({
            "keySize": 4,
            "hasher": n.SHA1,
            "iterations": 1
        }),
        "init": function (S) {
            this.cfg = this.cfg.extend(S);
        },
        "compute": function (S, Y) {
            for (var J = this.cfg, C = L.create(J.hasher, S), V = A.create(), W = A.create([1]), R = V.words, B = W.words, F = J.keySize, J = J.iterations; R.length < F;) {
                var E = C.update(Y).finalize(W);
                C.reset();

                for (var I = E.words, K = I.length, T = E, i = 1; i < J; i++) {
                    T = C.finalize(T);
                    C.reset();

                    for (var Z = T.words, w = 0; w < K; w++) I[w] ^= Z[w];
                }

                V.concat(E);
                B[0]++;
            }

            return V.sigBytes = 4 * F, V;
        }
    });

    p.PBKDF2 = function (S, f, Y) {
        return g.create(Y).compute(S, f);
    };
})();

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

function hex2b64(p) {
    var n;
    var c;
    var A = "";

    for (n = 0; n + 3 <= p.length; n += 3) {
        c = parseInt(p.substring(n, n + 3), 16);
        A += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }

    if (n + 1 == p.length) {
        c = parseInt(p.substring(n, n + 1), 16);
        A += b64map.charAt(c << 2);
    } else {
        if (n + 2 == p.length) {
            c = parseInt(p.substring(n, n + 2), 16);
            A += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
        }
    }

    if (b64pad) while ((A.length & 3) > 0) {
        A += b64pad;
    }
    return A;
}

function b64tohex(p) {
    var n = "";
    var A;
    var L = 0;
    var g;
    var S;

    for (A = 0; A < p.length; ++A) {
        if (p.charAt(A) == b64pad) break;
        S = b64map.indexOf(p.charAt(A));
        if (S < 0) continue;

        if (L == 0) {
            n += int2char(S >> 2);
            g = S & 3;
            L = 1;
        } else {
            if (L == 1) {
                n += int2char(g << 2 | S >> 4);
                g = S & 15;
                L = 2;
            } else {
                if (L == 2) {
                    n += int2char(g);
                    n += int2char(S >> 2);
                    g = S & 3;
                    L = 3;
                } else {
                    n += int2char(g << 2 | S >> 4);
                    n += int2char(S & 15);
                    L = 0;
                }
            }
        }
    }

    return L == 1 && (n += int2char(g << 2)), n;
}

function b64toBA(p) {
    var n = b64tohex(p);
    var a;
    var A = new Array();

    for (a = 0; 2 * a < n.length; ++a) {
        A[a] = parseInt(n.substring(2 * a, 2 * a + 2), 16);
    }

    return A;
}

;
var dbits;
var canary = 244837814094590;
var j_lm = (canary & 16777215) == 15715070;

function BigInteger(p, n, c) {
    if (p != null) {
        "number" == typeof p ? this.fromNumber(p, n, c) : n == null && "string" != typeof p ? this.fromString(p, 256) : this.fromString(p, n);
    }
}

function nbi() {
    return new BigInteger(null);
}

function am1(p, n, c, A, L, S) {
    while (--S >= 0) {
        var Y = n * this[p++] + c[A] + L;
        L = Math.floor(Y / 67108864);
        c[A++] = Y & 67108863;
    }

    return L;
}

function am2(n, c, A, L, S, Y) {
    var J = c & 32767;
    var C = c >> 15;

    while (--Y >= 0) {
        var V = this[n] & 32767;
        var W = this[n++] >> 15;
        var l = C * V + W * J;
        V = J * V + ((l & 32767) << 15) + A[L] + (S & 1073741823);
        S = (V >>> 30) + (l >>> 15) + C * W + (S >>> 30);
        A[L++] = V & 1073741823;
    }

    return S;
}

function am3(n, c, A, L, S, Y) {
    var J = c & 16383;
    var C = c >> 14;

    while (--Y >= 0) {
        var V = this[n] & 16383;
        var W = this[n++] >> 14;
        var l = C * V + W * J;
        V = J * V + ((l & 16383) << 14) + A[L] + S;
        S = (V >> 28) + (l >> 14) + C * W;
        A[L++] = V & 268435455;
    }

    return S;
}

if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30;
} else {
    if (j_lm && navigator.appName != "Netscape") {
        BigInteger.prototype.am = am1;
        dbits = 26;
    } else {
        BigInteger.prototype.am = am3;
        dbits = 28;
    }
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr;
var vv;
rr = "0".charCodeAt(0);

for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv;
}

rr = "a".charCodeAt(0);

for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}

rr = "A".charCodeAt(0);

for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}

function int2char(p) {
    return BI_RM.charAt(p);
}

function intAt(p, n) {
    var c = BI_RC[p.charCodeAt(n)];
    return c == null ? -1 : c;
}

function bnpCopyTo(p) {
    for (var n = this.t - 1; n >= 0; --n) {
        p[n] = this[n];
    }

    p.t = this.t;
    p.s = this.s;
}

function bnpFromInt(p) {
    this.t = 1;
    p < 0 ? this.s = -1 : this.s = 0;
    p > 0 ? this[0] = p : p < -1 ? this[0] = p + this.DV : this.t = 0;
}

function nbv(p) {
    var n = nbi();
    return n.fromInt(p), n;
}

function bnpFromString(p, n) {
    var A;
    if (n == 16) A = 4;else {
        if (n == 8) A = 3;else {
            if (n == 256) A = 8;else {
                if (n == 2) A = 1;else {
                    if (n == 32) A = 5;else {
                        if (n == 4) A = 2;else {
                            this.fromRadix(p, n);
                            return;
                        }
                    }
                }
            }
        }
    }
    this.t = 0;
    this.s = 0;
    var L = p.length;
    var S = ![];
    var Y = 0;

    while (--L >= 0) {
        if (A == 8) {
            var J = p[L] & 255;
        } else {
            var J = intAt(p, L);
        }

        if (J < 0) {
            if (p.charAt(L) == "-") {
                S = !![];
            }

            continue;
        }

        S = ![];
        Y == 0 ? this[this.t++] = J : Y + A > this.DB ? (this[this.t - 1] |= (J & (1 << this.DB - Y) - 1) << Y, this[this.t++] = J >> this.DB - Y) : this[this.t - 1] |= J << Y;
        Y += A;
        Y >= this.DB && (Y -= this.DB);
    }

    A == 8 && (p[0] & 128) != 0 && (this.s = -1, Y > 0 && (this[this.t - 1] |= (1 << this.DB - Y) - 1 << Y));
    this.clamp();
    S && BigInteger.ZERO.subTo(this, this);
}

function bnpClamp() {
    var p = this.s & this.DM;

    while (this.t > 0 && this[this.t - 1] == p) {
        --this.t;
    }
}

function bnToString(p) {
    if (this.s < 0) return "-" + this.negate().toString(p);
    var n;
    if (p == 16) n = 4;else {
        if (p == 8) n = 3;else {
            if (p == 2) n = 1;else {
                if (p == 32) n = 5;else {
                    if (p == 4) n = 2;else return this.toRadix(p);
                }
            }
        }
    }
    var A = (1 << n) - 1;
    var L;
    var S = ![];
    var Y = "";
    var J = this.t;
    var b = this.DB - J * this.DB % n;

    if (J-- > 0) {
        if (b < this.DB && (L = this[J] >> b) > 0) {
            S = !![];
            Y = int2char(L);
        }

        while (J >= 0) {
            b < n ? (L = (this[J] & (1 << b) - 1) << n - b, L |= this[--J] >> (b += this.DB - n)) : (L = this[J] >> (b -= n) & A, b <= 0 && (b += this.DB, --J));
            L > 0 && (S = !![]);
            S && (Y += int2char(L));
        }
    }

    return S ? Y : "0";
}

function bnNegate() {
    var p = nbi();
    return BigInteger.ZERO.subTo(this, p), p;
}

function bnAbs() {
    return this.s < 0 ? this.negate() : this;
}

function bnCompareTo(p) {
    var n = this.s - p.s;
    if (n != 0) return n;
    var a = this.t;
    n = a - p.t;
    if (n != 0) return this.s < 0 ? -n : n;

    while (--a >= 0) {
        if ((n = this[a] - p[a]) != 0) return n;
    }

    return 0;
}

function nbits(p) {
    var n = 1;
    var A;
    return (A = p >>> 16) != 0 && (p = A, n += 16), (A = p >> 8) != 0 && (p = A, n += 8), (A = p >> 4) != 0 && (p = A, n += 4), (A = p >> 2) != 0 && (p = A, n += 2), (A = p >> 1) != 0 && (p = A, n += 1), n;
}

function bnBitLength() {
    if (this.t <= 0) return 0;
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
}

function bnpDLShiftTo(p, n) {
    var A;

    for (A = this.t - 1; A >= 0; --A) {
        n[A + p] = this[A];
    }

    for (A = p - 1; A >= 0; --A) {
        n[A] = 0;
    }

    n.t = this.t + p;
    n.s = this.s;
}

function bnpDRShiftTo(p, n) {
    for (var A = p; A < this.t; ++A) {
        n[A - p] = this[A];
    }

    n.t = Math.max(this.t - p, 0);
    n.s = this.s;
}

function bnpLShiftTo(p, n) {
    var c = p % this.DB;
    var A = this.DB - c;
    var L = (1 << A) - 1;
    var S = Math.floor(p / this.DB);
    var Y = this.s << c & this.DM;
    var J;

    for (J = this.t - 1; J >= 0; --J) {
        n[J + S + 1] = this[J] >> A | Y;
        Y = (this[J] & L) << c;
    }

    for (J = S - 1; J >= 0; --J) {
        n[J] = 0;
    }

    n[S] = Y;
    n.t = this.t + S + 1;
    n.s = this.s;
    n.clamp();
}

function bnpRShiftTo(p, n) {
    n.s = this.s;
    var A = Math.floor(p / this.DB);

    if (A >= this.t) {
        n.t = 0;
        return;
    }

    var L = p % this.DB;
    var S = this.DB - L;
    var Y = (1 << L) - 1;
    n[0] = this[A] >> L;

    for (var J = A + 1; J < this.t; ++J) {
        n[J - A - 1] |= (this[J] & Y) << S;
        n[J - A] = this[J] >> L;
    }

    L > 0 && (n[this.t - A - 1] |= (this.s & Y) << S);
    n.t = this.t - A;
    n.clamp();
}

function bnpSubTo(p, n) {
    var c = 0;
    var a = 0;
    var A = Math.min(p.t, this.t);

    while (c < A) {
        a += this[c] - p[c];
        n[c++] = a & this.DM;
        a >>= this.DB;
    }

    if (p.t < this.t) {
        a -= p.s;

        while (c < this.t) {
            a += this[c];
            n[c++] = a & this.DM;
            a >>= this.DB;
        }

        a += this.s;
    } else {
        a += this.s;

        while (c < p.t) {
            a -= p[c];
            n[c++] = a & this.DM;
            a >>= this.DB;
        }

        a -= p.s;
    }

    a < 0 ? n.s = -1 : n.s = 0;
    a < -1 ? n[c++] = this.DV + a : a > 0 && (n[c++] = a);
    n.t = c;
    n.clamp();
}

function bnpMultiplyTo(p, n) {
    var a = this.abs();
    var A = p.abs();
    var L = a.t;
    n.t = L + A.t;

    while (--L >= 0) {
        n[L] = 0;
    }

    for (L = 0; L < A.t; ++L) {
        n[L + a.t] = a.am(0, A[L], n, L, 0, a.t);
    }

    n.s = 0;
    n.clamp();
    this.s != p.s && BigInteger.ZERO.subTo(n, n);
}

function bnpSquareTo(p) {
    var n = this.abs();
    var c = p.t = 2 * n.t;

    while (--c >= 0) {
        p[c] = 0;
    }

    for (c = 0; c < n.t - 1; ++c) {
        var A = n.am(c, n[c], p, 2 * c, 0, 1);

        if ((p[c + n.t] += n.am(c + 1, 2 * n[c], p, 2 * c + 1, A, n.t - c - 1)) >= n.DV) {
            p[c + n.t] -= n.DV;
            p[c + n.t + 1] = 1;
        }
    }

    p.t > 0 && (p[p.t - 1] += n.am(c, n[c], p, 2 * c, 0, 1));
    p.s = 0;
    p.clamp();
}

function bnpDivRemTo(L, S, Y) {
    var J = L.abs();
    if (J.t <= 0) return;
    var C = this.abs();

    if (C.t < J.t) {
        if (S != null) {
            S.fromInt(0);
        }

        if (Y != null) {
            this.copyTo(Y);
        }

        return;
    }

    if (Y == null) {
        Y = nbi();
    }

    var V = nbi();
    var W = this.s;
    var R = L.s;
    var B = this.DB - nbits(J[J.t - 1]);

    if (B > 0) {
        J.lShiftTo(B, V);
        C.lShiftTo(B, Y);
    } else {
        J.copyTo(V);
        C.copyTo(Y);
    }

    var F = V.t;
    var E = V[F - 1];
    if (E == 0) return;
    var I = E * (1 << this.F1) + (F > 1 ? V[F - 2] >> this.F2 : 0);
    var K = this.FV / I;
    var T = (1 << this.F1) / I;
    var i = 1 << this.F2;
    var e = Y.t;
    var Z = e - F;

    if (S == null) {
        var M = nbi();
    } else {
        var M = S;
    }

    V.dlShiftTo(Z, M);

    if (Y.compareTo(M) >= 0) {
        Y[Y.t++] = 1;
        Y.subTo(M, Y);
    }

    BigInteger.ONE.dlShiftTo(F, M);
    M.subTo(V, V);

    while (V.t < F) {
        V[V.t++] = 0;
    }

    while (--Z >= 0) {
        var q = Y[--e] == E ? this.DM : Math.floor(Y[e] * K + (Y[e - 1] + i) * T);

        if ((Y[e] += V.am(0, q, Y, Z, 0, F)) < q) {
            V.dlShiftTo(Z, M);
            Y.subTo(M, Y);

            while (Y[e] < --q) {
                Y.subTo(M, Y);
            }
        }
    }

    S != null && (Y.drShiftTo(F, S), W != R && BigInteger.ZERO.subTo(S, S));
    Y.t = F;
    Y.clamp();
    B > 0 && Y.rShiftTo(B, Y);
    W < 0 && BigInteger.ZERO.subTo(Y, Y);
}

function bnMod(p) {
    var n = nbi();
    return this.abs().divRemTo(p, null, n), this.s < 0 && n.compareTo(BigInteger.ZERO) > 0 && p.subTo(n, n), n;
}

function Classic(p) {
    this.m = p;
}

function cConvert(p) {
    return p.s < 0 || p.compareTo(this.m) >= 0 ? p.mod(this.m) : p;
}

function cRevert(p) {
    return p;
}

function cReduce(p) {
    p.divRemTo(this.m, null, p);
}

function cMulTo(p, n, A) {
    p.multiplyTo(n, A);
    this.reduce(A);
}

function cSqrTo(p, n) {
    p.squareTo(n);
    this.reduce(n);
}

Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

function bnpInvDigit() {
    if (this.t < 1) return 0;
    var p = this[0];
    if ((p & 1) == 0) return 0;
    var n = p & 3;
    return n = n * (2 - (p & 15) * n) & 15, n = n * (2 - (p & 255) * n) & 255, n = n * (2 - ((p & 65535) * n & 65535)) & 65535, n = n * (2 - p * n % this.DV) % this.DV, n > 0 ? this.DV - n : -n;
}

function Montgomery(p) {
    this.m = p;
    this.mp = p.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << p.DB - 15) - 1;
    this.mt2 = 2 * p.t;
}

function montConvert(p) {
    var n = nbi();
    return p.abs().dlShiftTo(this.m.t, n), n.divRemTo(this.m, null, n), p.s < 0 && n.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(n, n), n;
}

function montRevert(p) {
    var n = nbi();
    return p.copyTo(n), this.reduce(n), n;
}

function montReduce(p) {
    while (p.t <= this.mt2) {
        p[p.t++] = 0;
    }

    for (var n = 0; n < this.m.t; ++n) {
        var A = p[n] & 32767;
        var L = A * this.mpl + ((A * this.mph + (p[n] >> 15) * this.mpl & this.um) << 15) & p.DM;
        A = n + this.m.t;
        p[A] += this.m.am(0, L, p, n, 0, this.m.t);

        while (p[A] >= p.DV) {
            p[A] -= p.DV;
            p[++A]++;
        }
    }

    p.clamp();
    p.drShiftTo(this.m.t, p);
    p.compareTo(this.m) >= 0 && p.subTo(this.m, p);
}

function montSqrTo(p, n) {
    p.squareTo(n);
    this.reduce(n);
}

function montMulTo(p, n, A) {
    p.multiplyTo(n, A);
    this.reduce(A);
}

Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}

function bnpExp(p, n) {
    if (p > 4294967295 || p < 1) return BigInteger.ONE;
    var A = nbi();
    var L = nbi();
    var g = n.convert(this);
    var S = nbits(p) - 1;
    g.copyTo(A);

    while (--S >= 0) {
        n.sqrTo(A, L);
        if ((p & 1 << S) > 0) n.mulTo(L, g, A);else {
            var Y = A;
            A = L;
            L = Y;
        }
    }

    return n.revert(A);
}

function bnModPowInt(p, n) {
    var A;
    return p < 256 || n.isEven() ? A = new Classic(n) : A = new Montgomery(n), this.exp(p, A);
}

BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

function bnClone() {
    var p = nbi();
    return this.copyTo(p), p;
}

function bnIntValue() {
    if (this.s < 0) {
        if (this.t == 1) return this[0] - this.DV;else {
            if (this.t == 0) return -1;
        }
    } else {
        if (this.t == 1) return this[0];else {
            if (this.t == 0) return 0;
        }
    }

    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
}

function bnByteValue() {
    return this.t == 0 ? this.s : this[0] << 24 >> 24;
}

function bnShortValue() {
    return this.t == 0 ? this.s : this[0] << 16 >> 16;
}

function bnpChunkSize(p) {
    return Math.floor(Math.LN2 * this.DB / Math.log(p));
}

function bnSigNum() {
    return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
}

function bnpToRadix(p) {
    if (p == null) {
        p = 10;
    }

    if (this.signum() == 0 || p < 2 || p > 36) return "0";
    var n = this.chunkSize(p);
    var a = Math.pow(p, n);
    var A = nbv(a);
    var L = nbi();
    var S = nbi();
    var Y = "";
    this.divRemTo(A, L, S);

    while (L.signum() > 0) {
        Y = (a + S.intValue()).toString(p).substr(1) + Y;
        L.divRemTo(A, L, S);
    }

    return S.intValue().toString(p) + Y;
}

function bnpFromRadix(p, n) {
    this.fromInt(0);

    if (n == null) {
        n = 10;
    }

    var A = this.chunkSize(n);
    var L = Math.pow(n, A);
    var S = ![];
    var Y = 0;
    var J = 0;

    for (var b = 0; b < p.length; ++b) {
        var C = intAt(p, b);

        if (C < 0) {
            if (p.charAt(b) == "-" && this.signum() == 0) {
                S = !![];
            }

            continue;
        }

        J = n * J + C;
        ++Y >= A && (this.dMultiply(L), this.dAddOffset(J, 0), Y = 0, J = 0);
    }

    Y > 0 && (this.dMultiply(Math.pow(n, Y)), this.dAddOffset(J, 0));
    S && BigInteger.ZERO.subTo(this, this);
}

function bnpFromNumber(p, n, c) {
    if ("number" == typeof n) {
        if (p < 2) this.fromInt(1);else {
            this.fromNumber(p, c);

            if (!this.testBit(p - 1)) {
                this.bitwiseTo(BigInteger.ONE.shiftLeft(p - 1), op_or, this);
            }

            if (this.isEven()) {
                this.dAddOffset(1, 0);
            }

            while (!this.isProbablePrime(n)) {
                this.dAddOffset(2, 0);
                this.bitLength() > p && this.subTo(BigInteger.ONE.shiftLeft(p - 1), this);
            }
        }
    } else {
        var a = new Array();
        var A = p & 7;
        a.length = (p >> 3) + 1;
        n.nextBytes(a);
        A > 0 ? a[0] &= (1 << A) - 1 : a[0] = 0;
        this.fromString(a, 256);
    }
}

function bnToByteArray() {
    var p = this.t;
    var n = new Array();
    n[0] = this.s;
    var A = this.DB - p * this.DB % 8;
    var L;
    var g = 0;

    if (p-- > 0) {
        if (A < this.DB && (L = this[p] >> A) != (this.s & this.DM) >> A) {
            n[g++] = L | this.s << this.DB - A;
        }

        while (p >= 0) {
            A < 8 ? (L = (this[p] & (1 << A) - 1) << 8 - A, L |= this[--p] >> (A += this.DB - 8)) : (L = this[p] >> (A -= 8) & 255, A <= 0 && (A += this.DB, --p));
            (L & 128) != 0 && (L |= -256);
            g == 0 && (this.s & 128) != (L & 128) && ++g;
            (g > 0 || L != this.s) && (n[g++] = L);
        }
    }

    return n;
}

function bnEquals(p) {
    return this.compareTo(p) == 0;
}

function bnMin(p) {
    return this.compareTo(p) < 0 ? this : p;
}

function bnMax(p) {
    return this.compareTo(p) > 0 ? this : p;
}

function bnpBitwiseTo(p, n, a) {
    var A;
    var L;
    var S = Math.min(p.t, this.t);

    for (A = 0; A < S; ++A) {
        a[A] = n(this[A], p[A]);
    }

    if (p.t < this.t) {
        L = p.s & this.DM;

        for (A = S; A < this.t; ++A) {
            a[A] = n(this[A], L);
        }

        a.t = this.t;
    } else {
        L = this.s & this.DM;

        for (A = S; A < p.t; ++A) {
            a[A] = n(L, p[A]);
        }

        a.t = p.t;
    }

    a.s = n(this.s, p.s);
    a.clamp();
}

function op_and(p, n) {
    return p & n;
}

function bnAnd(p) {
    var n = nbi();
    return this.bitwiseTo(p, op_and, n), n;
}

function op_or(p, n) {
    return p | n;
}

function bnOr(p) {
    var n = nbi();
    return this.bitwiseTo(p, op_or, n), n;
}

function op_xor(p, n) {
    return p ^ n;
}

function bnXor(p) {
    var n = nbi();
    return this.bitwiseTo(p, op_xor, n), n;
}

function op_andnot(p, n) {
    return p & ~n;
}

function bnAndNot(p) {
    var n = nbi();
    return this.bitwiseTo(p, op_andnot, n), n;
}

function bnNot() {
    var p = nbi();

    for (var n = 0; n < this.t; ++n) {
        p[n] = this.DM & ~this[n];
    }

    return p.t = this.t, p.s = ~this.s, p;
}

function bnShiftLeft(p) {
    var n = nbi();
    return p < 0 ? this.rShiftTo(-p, n) : this.lShiftTo(p, n), n;
}

function bnShiftRight(p) {
    var n = nbi();
    return p < 0 ? this.lShiftTo(-p, n) : this.rShiftTo(p, n), n;
}

function lbit(p) {
    if (p == 0) return -1;
    var n = 0;
    return (p & 65535) == 0 && (p >>= 16, n += 16), (p & 255) == 0 && (p >>= 8, n += 8), (p & 15) == 0 && (p >>= 4, n += 4), (p & 3) == 0 && (p >>= 2, n += 2), (p & 1) == 0 && ++n, n;
}

function bnGetLowestSetBit() {
    for (var p = 0; p < this.t; ++p) {
        if (this[p] != 0) return p * this.DB + lbit(this[p]);
    }

    if (this.s < 0) return this.t * this.DB;
    return -1;
}

function cbit(p) {
    var n = 0;

    while (p != 0) {
        p &= p - 1;
        ++n;
    }

    return n;
}

function bnBitCount() {
    var p = 0;
    var n = this.s & this.DM;

    for (var A = 0; A < this.t; ++A) {
        p += cbit(this[A] ^ n);
    }

    return p;
}

function bnTestBit(p) {
    var n = Math.floor(p / this.DB);
    if (n >= this.t) return this.s != 0;
    return (this[n] & 1 << p % this.DB) != 0;
}

function bnpChangeBit(p, n) {
    var A = BigInteger.ONE.shiftLeft(p);
    return this.bitwiseTo(A, n, A), A;
}

function bnSetBit(p) {
    return this.changeBit(p, op_or);
}

function bnClearBit(p) {
    return this.changeBit(p, op_andnot);
}

function bnFlipBit(p) {
    return this.changeBit(p, op_xor);
}

function bnpAddTo(p, n) {
    var c = 0;
    var a = 0;
    var A = Math.min(p.t, this.t);

    while (c < A) {
        a += this[c] + p[c];
        n[c++] = a & this.DM;
        a >>= this.DB;
    }

    if (p.t < this.t) {
        a += p.s;

        while (c < this.t) {
            a += this[c];
            n[c++] = a & this.DM;
            a >>= this.DB;
        }

        a += this.s;
    } else {
        a += this.s;

        while (c < p.t) {
            a += p[c];
            n[c++] = a & this.DM;
            a >>= this.DB;
        }

        a += p.s;
    }

    a < 0 ? n.s = -1 : n.s = 0;
    a > 0 ? n[c++] = a : a < -1 && (n[c++] = this.DV + a);
    n.t = c;
    n.clamp();
}

function bnAdd(p) {
    var n = nbi();
    return this.addTo(p, n), n;
}

function bnSubtract(p) {
    var n = nbi();
    return this.subTo(p, n), n;
}

function bnMultiply(p) {
    var n = nbi();
    return this.multiplyTo(p, n), n;
}

function bnSquare() {
    var p = nbi();
    return this.squareTo(p), p;
}

function bnDivide(p) {
    var n = nbi();
    return this.divRemTo(p, n, null), n;
}

function bnRemainder(p) {
    var n = nbi();
    return this.divRemTo(p, null, n), n;
}

function bnDivideAndRemainder(p) {
    var n = nbi();
    var a = nbi();
    return this.divRemTo(p, n, a), new Array(n, a);
}

function bnpDMultiply(p) {
    this[this.t] = this.am(0, p - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
}

function bnpDAddOffset(p, n) {
    if (p == 0) return;

    while (this.t <= n) {
        this[this.t++] = 0;
    }

    this[n] += p;

    while (this[n] >= this.DV) {
        this[n] -= this.DV;
        ++n >= this.t && (this[this.t++] = 0);
        ++this[n];
    }
}

function NullExp() {}

function nNop(p) {
    return p;
}

function nMulTo(p, n, A) {
    p.multiplyTo(n, A);
}

function nSqrTo(p, n) {
    p.squareTo(n);
}

NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

function bnPow(p) {
    return this.exp(p, new NullExp());
}

function bnpMultiplyLowerTo(p, n, a) {
    var A = Math.min(this.t + p.t, n);
    a.s = 0;
    a.t = A;

    while (A > 0) {
        a[--A] = 0;
    }

    var L;

    for (L = a.t - this.t; A < L; ++A) {
        a[A + this.t] = this.am(0, p[A], a, A, 0, this.t);
    }

    for (L = Math.min(p.t, n); A < L; ++A) {
        this.am(0, p[A], a, A, 0, n - A);
    }

    a.clamp();
}

function bnpMultiplyUpperTo(p, n, a) {
    --n;
    var A = a.t = this.t + p.t - n;
    a.s = 0;

    while (--A >= 0) {
        a[A] = 0;
    }

    for (A = Math.max(n - this.t, 0); A < p.t; ++A) {
        a[this.t + A - n] = this.am(n - A, p[A], a, 0, 0, this.t + A - n);
    }

    a.clamp();
    a.drShiftTo(1, a);
}

function Barrett(p) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * p.t, this.r2);
    this.mu = this.r2.divide(p);
    this.m = p;
}

function barrettConvert(p) {
    if (p.s < 0 || p.t > 2 * this.m.t) return p.mod(this.m);else {
        if (p.compareTo(this.m) < 0) return p;else {
            var n = nbi();
            return p.copyTo(n), this.reduce(n), n;
        }
    }
}

function barrettRevert(p) {
    return p;
}

function barrettReduce(p) {
    p.drShiftTo(this.m.t - 1, this.r2);

    if (p.t > this.m.t + 1) {
        p.t = this.m.t + 1;
        p.clamp();
    }

    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);

    while (p.compareTo(this.r2) < 0) {
        p.dAddOffset(1, this.m.t + 1);
    }

    p.subTo(this.r2, p);

    while (p.compareTo(this.m) >= 0) {
        p.subTo(this.m, p);
    }
}

function barrettSqrTo(p, n) {
    p.squareTo(n);
    this.reduce(n);
}

function barrettMulTo(p, n, A) {
    p.multiplyTo(n, A);
    this.reduce(A);
}

Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

function bnModPow(n, L) {
    var g = n.bitLength();
    var S;
    var Y = nbv(1);
    var J;
    if (g <= 0) return Y;else if (g < 18) {
        S = 1;
    } else {
        if (g < 48) {
            S = 3;
        } else {
            if (g < 144) {
                S = 4;
            } else {
                if (g < 768) {
                    S = 5;
                } else {
                    S = 6;
                }
            }
        }
    }

    if (g < 8) {
        J = new Classic(L);
    } else {
        if (L.isEven()) {
            J = new Barrett(L);
        } else {
            J = new Montgomery(L);
        }
    }

    var C = new Array();
    var V = 3;
    var W = S - 1;
    var R = (1 << S) - 1;
    C[1] = J.convert(this);

    if (S > 1) {
        var B = nbi();
        J.sqrTo(C[1], B);

        while (V <= R) {
            C[V] = nbi();
            J.mulTo(B, C[V - 2], C[V]);
            V += 2;
        }
    }

    var F = n.t - 1;
    var E;
    var I = !![];
    var K = nbi();
    var T;
    g = nbits(n[F]) - 1;

    while (F >= 0) {
        if (g >= W) {
            E = n[F] >> g - W & R;
        } else {
            E = (n[F] & (1 << g + 1) - 1) << W - g;
            F > 0 && (E |= n[F - 1] >> this.DB + g - W);
        }

        V = S;

        while ((E & 1) == 0) {
            E >>= 1;
            --V;
        }

        if ((g -= V) < 0) {
            g += this.DB;
            --F;
        }

        if (I) {
            C[E].copyTo(Y);
            I = ![];
        } else {
            while (V > 1) {
                J.sqrTo(Y, K);
                J.sqrTo(K, Y);
                V -= 2;
            }

            V > 0 ? J.sqrTo(Y, K) : (T = Y, Y = K, K = T);
            J.mulTo(K, C[E], Y);
        }

        while (F >= 0 && (n[F] & 1 << g) == 0) {
            J.sqrTo(Y, K);
            T = Y;
            Y = K;
            K = T;
            --g < 0 && (g = this.DB - 1, --F);
        }
    }

    return J.revert(Y);
}

function bnGCD(p) {
    if (this.s < 0) {
        var n = this.negate();
    } else {
        var n = this.clone();
    }

    if (p.s < 0) {
        var a = p.negate();
    } else {
        var a = p.clone();
    }

    if (n.compareTo(a) < 0) {
        var A = n;
        n = a;
        a = A;
    }

    var L = n.getLowestSetBit();
    var g = a.getLowestSetBit();
    if (g < 0) return n;

    if (L < g) {
        g = L;
    }

    if (g > 0) {
        n.rShiftTo(g, n);
        a.rShiftTo(g, a);
    }

    while (n.signum() > 0) {
        (L = n.getLowestSetBit()) > 0 && n.rShiftTo(L, n);
        (L = a.getLowestSetBit()) > 0 && a.rShiftTo(L, a);
        n.compareTo(a) >= 0 ? (n.subTo(a, n), n.rShiftTo(1, n)) : (a.subTo(n, a), a.rShiftTo(1, a));
    }

    return g > 0 && a.lShiftTo(g, a), a;
}

function bnpModInt(p) {
    if (p <= 0) return 0;
    var n = this.DV % p;

    if (this.s < 0) {
        var A = p - 1;
    } else {
        var A = 0;
    }

    if (this.t > 0) {
        if (n == 0) A = this[0] % p;else for (var L = this.t - 1; L >= 0; --L) {
            A = (n * A + this[L]) % p;
        }
    }

    return A;
}

function bnModInverse(p) {
    var n = p.isEven();
    if (this.isEven() && n || p.signum() == 0) return BigInteger.ZERO;
    var c = p.clone();
    var a = this.clone();
    var A = nbv(1);
    var L = nbv(0);
    var S = nbv(0);
    var Y = nbv(1);

    while (c.signum() != 0) {
        while (c.isEven()) {
            c.rShiftTo(1, c);
            n ? ((!A.isEven() || !L.isEven()) && (A.addTo(this, A), L.subTo(p, L)), A.rShiftTo(1, A)) : !L.isEven() && L.subTo(p, L);
            L.rShiftTo(1, L);
        }

        while (a.isEven()) {
            a.rShiftTo(1, a);
            n ? ((!S.isEven() || !Y.isEven()) && (S.addTo(this, S), Y.subTo(p, Y)), S.rShiftTo(1, S)) : !Y.isEven() && Y.subTo(p, Y);
            Y.rShiftTo(1, Y);
        }

        if (c.compareTo(a) >= 0) {
            c.subTo(a, c);
            n && A.subTo(S, A);
            L.subTo(Y, L);
        } else {
            a.subTo(c, a);
            n && S.subTo(A, S);
            Y.subTo(L, Y);
        }
    }

    if (a.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
    if (Y.compareTo(p) >= 0) return Y.subtract(p);
    if (Y.signum() < 0) Y.addTo(p, Y);else return Y;
    return Y.signum() < 0 ? Y.add(p) : Y;
}

var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var lplim = 67108864 / lowprimes[lowprimes.length - 1];

function bnIsProbablePrime(p) {
    var n;
    var A = this.abs();

    if (A.t == 1 && A[0] <= lowprimes[lowprimes.length - 1]) {
        for (n = 0; n < lowprimes.length; ++n) {
            if (A[0] == lowprimes[n]) return !![];
        }

        return ![];
    }

    if (A.isEven()) return ![];
    n = 1;

    while (n < lowprimes.length) {
        var L = lowprimes[n];
        var g = n + 1;

        while (g < lowprimes.length && L < lplim) {
            L *= lowprimes[g++];
        }

        L = A.modInt(L);

        while (n < g) {
            if (L % lowprimes[n++] == 0) return ![];
        }
    }

    return A.millerRabin(p);
}

function bnpMillerRabin(p) {
    var n = this.subtract(BigInteger.ONE);
    var a = n.getLowestSetBit();
    if (a <= 0) return ![];
    var A = n.shiftRight(a);
    p = p + 1 >> 1;

    if (p > lowprimes.length) {
        p = lowprimes.length;
    }

    var L = nbi();

    for (var S = 0; S < p; ++S) {
        L.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var Y = L.modPow(A, this);

        if (Y.compareTo(BigInteger.ONE) != 0 && Y.compareTo(n) != 0) {
            var J = 1;

            while (J++ < a && Y.compareTo(n) != 0) {
                Y = Y.modPowInt(2, this);
                if (Y.compareTo(BigInteger.ONE) == 0) return ![];
            }

            if (Y.compareTo(n) != 0) return ![];
        }
    }

    return !![];
}

BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
BigInteger.prototype.square = bnSquare;

function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = new Array();
}

function ARC4init(p) {
    var n;
    var A;
    var L;

    for (n = 0; n < 256; ++n) {
        this.S[n] = n;
    }

    A = 0;

    for (n = 0; n < 256; ++n) {
        A = A + this.S[n] + p[n % p.length] & 255;
        L = this.S[n];
        this.S[n] = this.S[A];
        this.S[A] = L;
    }

    this.i = 0;
    this.j = 0;
}

function ARC4next() {
    var p;
    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, p = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = p, this.S[p + this.S[this.i] & 255];
}

Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;

function prng_newstate() {
    return new Arcfour();
}

var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;

function rng_seed_int(p) {
    rng_pool[rng_pptr++] ^= p & 255;
    rng_pool[rng_pptr++] ^= p >> 8 & 255;
    rng_pool[rng_pptr++] ^= p >> 16 & 255;
    rng_pool[rng_pptr++] ^= p >> 24 & 255;
    rng_pptr >= rng_psize && (rng_pptr -= rng_psize);
}

function rng_seed_time() {
    rng_seed_int(new Date().getTime());
}

if (rng_pool == null) {
    rng_pool = new Array();
    rng_pptr = 0;
    var t;

    if (window !== undefined && (window.crypto !== undefined || window.msCrypto !== undefined)) {
        var crypto = window.crypto || window.msCrypto;

        if (crypto.getRandomValues) {
            var ua = new Uint8Array(32);
            crypto.getRandomValues(ua);

            for (t = 0; t < 32; ++t) {
                rng_pool[rng_pptr++] = ua[t];
            }
        } else {
            if (navigator.appName == "Netscape" && navigator.appVersion < "5") {
                var z = window.crypto.random(32);

                for (t = 0; t < z.length; ++t) {
                    rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
                }
            }
        }
    }

    while (rng_pptr < rng_psize) {
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
    }

    rng_pptr = 0;
    rng_seed_time();
}

function rng_get_byte() {
    if (rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);

        for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
            rng_pool[rng_pptr] = 0;
        }

        rng_pptr = 0;
    }

    return rng_state.next();
}

function rng_get_bytes(p) {
    var n;

    for (n = 0; n < p.length; ++n) {
        p[n] = rng_get_byte();
    }
}

function SecureRandom() {}

SecureRandom.prototype.nextBytes = rng_get_bytes;

function parseBigInt(p, n) {
    return new BigInteger(p, n);
}

function linebrk(p, n) {
    var A = "";
    var L = 0;

    while (L + n < p.length) {
        A += p.substring(L, L + n) + "\n";
        L += n;
    }

    return A + p.substring(L, p.length);
}

function byte2Hex(p) {
    return p < 16 ? "0" + p.toString(16) : p.toString(16);
}

function pkcs1pad2(p, n) {
    if (n < p.length + 11) {
        throw "Message too long for RSA";
        return null;
    }

    var c = new Array();
    var A = p.length - 1;

    while (A >= 0 && n > 0) {
        var L = p.charCodeAt(A--);

        if (L < 128) {
            c[--n] = L;
        } else {
            if (L > 127 && L < 2048) {
                c[--n] = L & 63 | 128;
                c[--n] = L >> 6 | 192;
            } else {
                c[--n] = L & 63 | 128;
                c[--n] = L >> 6 & 63 | 128;
                c[--n] = L >> 12 | 224;
            }
        }
    }

    c[--n] = 0;
    var S = new SecureRandom();
    var Y = new Array();

    while (n > 2) {
        Y[0] = 0;

        while (Y[0] == 0) {
            S.nextBytes(Y);
        }

        c[--n] = Y[0];
    }

    return c[--n] = 2, c[--n] = 0, new BigInteger(c);
}

function oaep_mgf1_arr(p, n, A) {
    var L = "";
    var g = 0;

    while (L.length < n) {
        L += A(String.fromCharCode.apply(String, p.concat([(g & 4278190080) >> 24, (g & 16711680) >> 16, (g & 65280) >> 8, g & 255])));
        g += 1;
    }

    return L;
}

function oaep_pad(n, A, L, S) {
    var Y = KJUR.crypto.MessageDigest;
    var J = KJUR.crypto.Util;
    var C = null;

    if (!L) {
        L = "sha1";
    }

    if (typeof L === "string") {
        C = Y.getCanonicalAlgName(L);
        S = Y.getHashLength(C);

        L = function (K) {
            return hextorstr(J.hashHex(rstrtohex(K), C));
        };
    }

    if (n.length + 2 * S + 2 > A) throw "Message too long for RSA";
    var V = "";
    var W;

    for (W = 0; W < A - n.length - 2 * S - 2; W += 1) {
        V += "\0";
    }

    var R = L("") + V + "" + n;
    var B = new Array(S);
    new SecureRandom().nextBytes(B);
    var F = oaep_mgf1_arr(B, R.length, L);
    var E = [];

    for (W = 0; W < R.length; W += 1) {
        E[W] = R.charCodeAt(W) ^ F.charCodeAt(W);
    }

    var s = oaep_mgf1_arr(E, B.length, L);
    var I = [0];

    for (W = 0; W < B.length; W += 1) {
        I[W + 1] = B[W] ^ s.charCodeAt(W);
    }

    return new BigInteger(I.concat(E));
}

function RSAKey() {
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null;
}

function RSASetPublic(p, n) {
    this.isPublic = !![];
    this.isPrivate = ![];

    if (typeof p !== "string") {
        this.n = p;
        this.e = n;
    } else {
        if (p != null && n != null && p.length > 0 && n.length > 0) {
            this.n = parseBigInt(p, 16);
            this.e = parseInt(n, 16);
        } else throw "Invalid RSA public key";
    }
}

function RSADoPublic(p) {
    return p.modPowInt(this.e, this.n);
}

function RSAEncrypt(p) {
    var n = pkcs1pad2(p, this.n.bitLength() + 7 >> 3);
    if (n == null) return null;
    var c = this.doPublic(n);
    if (c == null) return null;
    var A = c.toString(16);
    return (A.length & 1) == 0 ? A : "0" + A;
}

function RSAEncryptOAEP(p, n, c) {
    var A = oaep_pad(p, this.n.bitLength() + 7 >> 3, n, c);
    if (A == null) return null;
    var L = this.doPublic(A);
    if (L == null) return null;
    var S = L.toString(16);
    return (S.length & 1) == 0 ? S : "0" + S;
}

RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.encryptOAEP = RSAEncryptOAEP;
RSAKey.prototype.type = "RSA";

function pkcs1unpad2(p, n) {
    var c = p.toByteArray();
    var A = 0;

    while (A < c.length && c[A] == 0) {
        ++A;
    }

    if (c.length - A != n - 1 || c[A] != 2) return null;
    ++A;

    while (c[A] != 0) {
        if (++A >= c.length) return null;
    }

    var L = "";

    while (++A < c.length) {
        var S = c[A] & 255;

        if (S < 128) {
            L += String.fromCharCode(S);
        } else {
            if (S > 191 && S < 224) {
                L += String.fromCharCode((S & 31) << 6 | c[A + 1] & 63);
                ++A;
            } else {
                L += String.fromCharCode((S & 15) << 12 | (c[A + 1] & 63) << 6 | c[A + 2] & 63);
                A += 2;
            }
        }
    }

    return L;
}

function oaep_mgf1_str(p, n, A) {
    var L = "";
    var g = 0;

    while (L.length < n) {
        L += A(p + String.fromCharCode.apply(String, [(g & 4278190080) >> 24, (g & 16711680) >> 16, (g & 65280) >> 8, g & 255]));
        g += 1;
    }

    return L;
}

function oaep_unpad(n, A, L, S) {
    var Y = KJUR.crypto.MessageDigest;
    var J = KJUR.crypto.Util;
    var C = null;

    if (!L) {
        L = "sha1";
    }

    if (typeof L === "string") {
        C = Y.getCanonicalAlgName(L);
        S = Y.getHashLength(C);

        L = function (i) {
            return hextorstr(J.hashHex(rstrtohex(i), C));
        };
    }

    n = n.toByteArray();
    var V;

    for (V = 0; V < n.length; V += 1) {
        n[V] &= 255;
    }

    while (n.length < A) {
        n.unshift(0);
    }

    n = String.fromCharCode.apply(String, n);
    if (n.length < 2 * S + 2) throw "Cipher too short";
    var W = n.substr(1, S);
    var R = n.substr(S + 1);
    var B = oaep_mgf1_str(R, S, L);
    var F = [];
    var V;

    for (V = 0; V < W.length; V += 1) {
        F[V] = W.charCodeAt(V) ^ B.charCodeAt(V);
    }

    var E = oaep_mgf1_str(String.fromCharCode.apply(String, F), n.length - S, L);
    var I = [];

    for (V = 0; V < R.length; V += 1) {
        I[V] = R.charCodeAt(V) ^ E.charCodeAt(V);
    }

    I = String.fromCharCode.apply(String, I);
    if (I.substr(0, S) !== L("")) throw "Hash mismatch";
    I = I.substr(S);
    var K = I.indexOf("");

    if (K != -1) {
        var T = I.substr(0, K).lastIndexOf("\0");
    } else {
        var T = -1;
    }

    if (T + 1 != K) throw "Malformed data";
    return I.substr(K + 1);
}

function RSASetPrivate(p, n, A) {
    this.isPrivate = !![];

    if (typeof p !== "string") {
        this.n = p;
        this.e = n;
        this.d = A;
    } else {
        if (p != null && n != null && p.length > 0 && n.length > 0) {
            this.n = parseBigInt(p, 16);
            this.e = parseInt(n, 16);
            this.d = parseBigInt(A, 16);
        } else throw "Invalid RSA private key";
    }
}

function RSASetPrivateEx(p, n, A, L, S, Y, J, C) {
    this.isPrivate = !![];
    this.isPublic = ![];
    if (p == null) throw "RSASetPrivateEx N == null";
    if (n == null) throw "RSASetPrivateEx E == null";
    if (p.length == 0) throw "RSASetPrivateEx N.length == 0";
    if (n.length == 0) throw "RSASetPrivateEx E.length == 0";

    if (p != null && n != null && p.length > 0 && n.length > 0) {
        this.n = parseBigInt(p, 16);
        this.e = parseInt(n, 16);
        this.d = parseBigInt(A, 16);
        this.p = parseBigInt(L, 16);
        this.q = parseBigInt(S, 16);
        this.dmp1 = parseBigInt(Y, 16);
        this.dmq1 = parseBigInt(J, 16);
        this.coeff = parseBigInt(C, 16);
    } else throw "Invalid RSA private key in RSASetPrivateEx";
}

function RSAGenerate(p, n) {
    var A = new SecureRandom();
    var L = p >> 1;
    this.e = parseInt(n, 16);
    var S = new BigInteger(n, 16);

    for (;;) {
        for (;;) {
            this.p = new BigInteger(p - L, 1, A);
            if (this.p.subtract(BigInteger.ONE).gcd(S).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) break;
        }

        for (;;) {
            this.q = new BigInteger(L, 1, A);
            if (this.q.subtract(BigInteger.ONE).gcd(S).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) break;
        }

        if (this.p.compareTo(this.q) <= 0) {
            var Y = this.p;
            this.p = this.q;
            this.q = Y;
        }

        var J = this.p.subtract(BigInteger.ONE);
        var C = this.q.subtract(BigInteger.ONE);
        var V = J.multiply(C);

        if (V.gcd(S).compareTo(BigInteger.ONE) == 0) {
            this.n = this.p.multiply(this.q);

            if (this.n.bitLength() == p) {
                this.d = S.modInverse(V);
                this.dmp1 = this.d.mod(J);
                this.dmq1 = this.d.mod(C);
                this.coeff = this.q.modInverse(this.p);
                break;
            }
        }
    }

    this.isPrivate = !![];
}

function RSADoPrivate(p) {
    if (this.p == null || this.q == null) return p.modPow(this.d, this.n);
    var n = p.mod(this.p).modPow(this.dmp1, this.p);
    var A = p.mod(this.q).modPow(this.dmq1, this.q);

    while (n.compareTo(A) < 0) {
        n = n.add(this.p);
    }

    return n.subtract(A).multiply(this.coeff).mod(this.p).multiply(this.q).add(A);
}

function RSADecrypt(p) {
    if (p.length != Math.ceil(this.n.bitLength() / 4)) throw new Error("wrong ctext length");
    var n = parseBigInt(p, 16);
    var c = this.doPrivate(n);
    if (c == null) return null;
    return pkcs1unpad2(c, this.n.bitLength() + 7 >> 3);
}

function RSADecryptOAEP(p, n, c) {
    if (p.length != Math.ceil(this.n.bitLength() / 4)) throw new Error("wrong ctext length");
    var A = parseBigInt(p, 16);
    var L = this.doPrivate(A);
    if (L == null) return null;
    return oaep_unpad(L, this.n.bitLength() + 7 >> 3, n, c);
}

RSAKey.prototype.doPrivate = RSADoPrivate;
RSAKey.prototype.setPrivate = RSASetPrivate;
RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
RSAKey.prototype.generate = RSAGenerate;
RSAKey.prototype.decrypt = RSADecrypt;
RSAKey.prototype.decryptOAEP = RSADecryptOAEP;

function ECFieldElementFp(p, n) {
    this.x = n;
    this.q = p;
}

function feFpEquals(p) {
    if (p == this) return !![];
    return this.q.equals(p.q) && this.x.equals(p.x);
}

function feFpToBigInteger() {
    return this.x;
}

function feFpNegate() {
    return new ECFieldElementFp(this.q, this.x.negate().mod(this.q));
}

function feFpAdd(p) {
    return new ECFieldElementFp(this.q, this.x.add(p.toBigInteger()).mod(this.q));
}

function feFpSubtract(p) {
    return new ECFieldElementFp(this.q, this.x.subtract(p.toBigInteger()).mod(this.q));
}

function feFpMultiply(p) {
    return new ECFieldElementFp(this.q, this.x.multiply(p.toBigInteger()).mod(this.q));
}

function feFpSquare() {
    return new ECFieldElementFp(this.q, this.x.square().mod(this.q));
}

function feFpDivide(p) {
    return new ECFieldElementFp(this.q, this.x.multiply(p.toBigInteger().modInverse(this.q)).mod(this.q));
}

ECFieldElementFp.prototype.equals = feFpEquals;
ECFieldElementFp.prototype.toBigInteger = feFpToBigInteger;
ECFieldElementFp.prototype.negate = feFpNegate;
ECFieldElementFp.prototype.add = feFpAdd;
ECFieldElementFp.prototype.subtract = feFpSubtract;
ECFieldElementFp.prototype.multiply = feFpMultiply;
ECFieldElementFp.prototype.square = feFpSquare;
ECFieldElementFp.prototype.divide = feFpDivide;

function ECPointFp(p, n, A, L) {
    this.curve = p;
    this.x = n;
    this.y = A;
    L == null ? this.z = BigInteger.ONE : this.z = L;
    this.zinv = null;
}

function pointFpGetX() {
    return this.zinv == null && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}

function pointFpGetY() {
    return this.zinv == null && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
}

function pointFpEquals(p) {
    if (p == this) return !![];
    if (this.isInfinity()) return p.isInfinity();
    if (p.isInfinity()) return this.isInfinity();
    var n;
    var A;
    n = p.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(p.z)).mod(this.curve.q);
    if (!n.equals(BigInteger.ZERO)) return ![];
    return A = p.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(p.z)).mod(this.curve.q), A.equals(BigInteger.ZERO);
}

function pointFpIsInfinity() {
    if (this.x == null && this.y == null) return !![];
    return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO);
}

function pointFpNegate() {
    return new ECPointFp(this.curve, this.x, this.y.negate(), this.z);
}

function pointFpAdd(A) {
    if (this.isInfinity()) return A;
    if (A.isInfinity()) return this;
    var L = A.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(A.z)).mod(this.curve.q);
    var S = A.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(A.z)).mod(this.curve.q);

    if (BigInteger.ZERO.equals(S)) {
        if (BigInteger.ZERO.equals(L)) return this.twice();
        return this.curve.getInfinity();
    }

    var Y = new BigInteger("3");
    var J = this.x.toBigInteger();
    var b = this.y.toBigInteger();
    var C = A.x.toBigInteger();
    var V = A.y.toBigInteger();
    var W = S.square();
    var R = W.multiply(S);
    var B = J.multiply(W);
    var F = L.square().multiply(this.z);
    var E = F.subtract(B.shiftLeft(1)).multiply(A.z).subtract(R).multiply(S).mod(this.curve.q);
    var s = B.multiply(Y).multiply(L).subtract(b.multiply(R)).subtract(F.multiply(L)).multiply(A.z).add(L.multiply(R)).mod(this.curve.q);
    var I = R.multiply(this.z).multiply(A.z).mod(this.curve.q);
    return new ECPointFp(this.curve, this.curve.fromBigInteger(E), this.curve.fromBigInteger(s), I);
}

function pointFpTwice() {
    if (this.isInfinity()) return this;
    if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();
    var p = new BigInteger("3");
    var n = this.x.toBigInteger();
    var a = this.y.toBigInteger();
    var A = a.multiply(this.z);
    var L = A.multiply(a).mod(this.curve.q);
    var S = this.curve.a.toBigInteger();
    var Y = n.square().multiply(p);

    if (!BigInteger.ZERO.equals(S)) {
        Y = Y.add(this.z.square().multiply(S));
    }

    Y = Y.mod(this.curve.q);
    var J = Y.square().subtract(n.shiftLeft(3).multiply(L)).shiftLeft(1).multiply(A).mod(this.curve.q);
    var C = Y.multiply(p).multiply(n).subtract(L.shiftLeft(1)).shiftLeft(2).multiply(L).subtract(Y.square().multiply(Y)).mod(this.curve.q);
    var V = A.square().multiply(A).shiftLeft(3).mod(this.curve.q);
    return new ECPointFp(this.curve, this.curve.fromBigInteger(J), this.curve.fromBigInteger(C), V);
}

function pointFpMultiply(A) {
    if (this.isInfinity()) return this;
    if (A.signum() == 0) return this.curve.getInfinity();
    var L = A;
    var S = L.multiply(new BigInteger("3"));
    var Y = this.negate();
    var J = this;
    var C = this.curve.q.subtract(A);
    var V = C.multiply(new BigInteger("3"));
    var W = new ECPointFp(this.curve, this.x, this.y);
    var R = W.negate();
    var B;

    for (B = S.bitLength() - 2; B > 0; --B) {
        J = J.twice();
        var F = S.testBit(B);
        var E = L.testBit(B);

        if (F != E) {
            J = J.add(F ? this : Y);
        }
    }

    for (B = V.bitLength() - 2; B > 0; --B) {
        W = W.twice();
        var s = V.testBit(B);
        var I = C.testBit(B);

        if (s != I) {
            W = W.add(s ? W : R);
        }
    }

    return J;
}

function pointFpMultiplyTwo(p, n, A) {
    var L;

    if (p.bitLength() > A.bitLength()) {
        L = p.bitLength() - 1;
    } else {
        L = A.bitLength() - 1;
    }

    var g = this.curve.getInfinity();
    var S = this.add(n);

    while (L >= 0) {
        g = g.twice();
        p.testBit(L) ? A.testBit(L) ? g = g.add(S) : g = g.add(this) : A.testBit(L) && (g = g.add(n));
        --L;
    }

    return g;
}

ECPointFp.prototype.getX = pointFpGetX;
ECPointFp.prototype.getY = pointFpGetY;
ECPointFp.prototype.equals = pointFpEquals;
ECPointFp.prototype.isInfinity = pointFpIsInfinity;
ECPointFp.prototype.negate = pointFpNegate;
ECPointFp.prototype.add = pointFpAdd;
ECPointFp.prototype.twice = pointFpTwice;
ECPointFp.prototype.multiply = pointFpMultiply;
ECPointFp.prototype.multiplyTwo = pointFpMultiplyTwo;

function ECCurveFp(p, n, a) {
    this.q = p;
    this.a = this.fromBigInteger(n);
    this.b = this.fromBigInteger(a);
    this.infinity = new ECPointFp(this, null, null);
}

function curveFpGetQ() {
    return this.q;
}

function curveFpGetA() {
    return this.a;
}

function curveFpGetB() {
    return this.b;
}

function curveFpEquals(p) {
    if (p == this) return !![];
    return this.q.equals(p.q) && this.a.equals(p.a) && this.b.equals(p.b);
}

function curveFpGetInfinity() {
    return this.infinity;
}

function curveFpFromBigInteger(p) {
    return new ECFieldElementFp(this.q, p);
}

function curveFpDecodePointHex(p) {
    switch (parseInt(p.substr(0, 2), 16)) {
        case 0:
            return this.infinity;

        case 2:
        case 3:
            return null;

        case 4:
        case 6:
        case 7:
            var n = (p.length - 2) / 2;
            var A = p.substr(2, n);
            var L = p.substr(n + 2, n);
            return new ECPointFp(this, this.fromBigInteger(new BigInteger(A, 16)), this.fromBigInteger(new BigInteger(L, 16)));

        default:
            return null;
    }
}

ECCurveFp.prototype.getQ = curveFpGetQ;
ECCurveFp.prototype.getA = curveFpGetA;
ECCurveFp.prototype.getB = curveFpGetB;
ECCurveFp.prototype.equals = curveFpEquals;
ECCurveFp.prototype.getInfinity = curveFpGetInfinity;
ECCurveFp.prototype.fromBigInteger = curveFpFromBigInteger;
ECCurveFp.prototype.decodePointHex = curveFpDecodePointHex;

ECFieldElementFp.prototype.getByteLength = function () {
    return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
};

ECPointFp.prototype.getEncoded = function (p) {
    var n = function (S, Y) {
        var J = S.toByteArrayUnsigned();
        if (Y < J.length) J = J.slice(J.length - Y);else while (Y > J.length) {
            J.unshift(0);
        }
        return J;
    };

    var A = this.getX().toBigInteger();
    var L = this.getY().toBigInteger();
    var g = n(A, 32);
    return p ? L.isEven() ? g.unshift(2) : g.unshift(3) : (g.unshift(4), g = g.concat(n(L, 32))), g;
};

ECPointFp.decodeFrom = function (p, n) {
    var A = n[0];
    var L = n.length - 1;
    var S = n.slice(1, 1 + L / 2);
    var Y = n.slice(1 + L / 2, 1 + L);
    S.unshift(0);
    Y.unshift(0);
    var J = new BigInteger(S);
    var C = new BigInteger(Y);
    return new ECPointFp(p, p.fromBigInteger(J), p.fromBigInteger(C));
};

ECPointFp.decodeFromHex = function (p, n) {
    var A = n.substr(0, 2);
    var L = n.length - 2;
    var S = n.substr(2, L / 2);
    var Y = n.substr(2 + L / 2, L / 2);
    var J = new BigInteger(S, 16);
    var C = new BigInteger(Y, 16);
    return new ECPointFp(p, p.fromBigInteger(J), p.fromBigInteger(C));
};

ECPointFp.prototype.add2D = function (p) {
    if (this.isInfinity()) return p;
    if (p.isInfinity()) return this;

    if (this.x.equals(p.x)) {
        if (this.y.equals(p.y)) return this.twice();
        return this.curve.getInfinity();
    }

    var n = p.x.subtract(this.x);
    var A = p.y.subtract(this.y);
    var L = A.divide(n);
    var S = L.square().subtract(this.x).subtract(p.x);
    var Y = L.multiply(this.x.subtract(S)).subtract(this.y);
    return new ECPointFp(this.curve, S, Y);
};

ECPointFp.prototype.twice2D = function () {
    if (this.isInfinity()) return this;
    if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();
    var p = this.curve.fromBigInteger(BigInteger.valueOf(2));
    var n = this.curve.fromBigInteger(BigInteger.valueOf(3));
    var A = this.x.square().multiply(n).add(this.curve.a).divide(this.y.multiply(p));
    var L = A.square().subtract(this.x.multiply(p));
    var g = A.multiply(this.x.subtract(L)).subtract(this.y);
    return new ECPointFp(this.curve, L, g);
};

ECPointFp.prototype.multiply2D = function (p) {
    if (this.isInfinity()) return this;
    if (p.signum() == 0) return this.curve.getInfinity();
    var n = p;
    var A = n.multiply(new BigInteger("3"));
    var L = this.negate();
    var S = this;
    var Y;

    for (Y = A.bitLength() - 2; Y > 0; --Y) {
        S = S.twice();
        var J = A.testBit(Y);
        var C = n.testBit(Y);

        if (J != C) {
            S = S.add2D(J ? this : L);
        }
    }

    return S;
};

ECPointFp.prototype.isOnCurve = function () {
    var p = this.getX().toBigInteger();
    var n = this.getY().toBigInteger();
    var a = this.curve.getA().toBigInteger();
    var A = this.curve.getB().toBigInteger();
    var L = this.curve.getQ();
    var S = n.multiply(n).mod(L);
    var Y = p.multiply(p).multiply(p).add(a.multiply(p)).add(A).mod(L);
    return S.equals(Y);
};

ECPointFp.prototype.toString = function () {
    return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")";
};

ECPointFp.prototype.validate = function () {
    var p = this.curve.getQ();
    if (this.isInfinity()) throw new Error("Point is at infinity.");
    var n = this.getX().toBigInteger();
    var A = this.getY().toBigInteger();
    if (n.compareTo(BigInteger.ONE) < 0 || n.compareTo(p.subtract(BigInteger.ONE)) > 0) throw new Error("x coordinate out of bounds");
    if (A.compareTo(BigInteger.ONE) < 0 || A.compareTo(p.subtract(BigInteger.ONE)) > 0) throw new Error("y coordinate out of bounds");
    if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
    if (this.multiply(p).isInfinity()) throw new Error("Point is not a scalar multiple of G.");
    return !![];
};

var jsonParse = function () {
    var p = "(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)";
    var n = "(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))";
    var A = "(?:\"" + n + "*\")";
    var L = new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|" + p + "|" + A + ")", "g");
    var S = new RegExp("\\\\(?:([^u])|u(.{4}))", "g");
    var Y = {
        "\"": "\"",
        "/": "/",
        "\\": "\\",
        "b": "\b",
        "f": "\f",
        "n": "\n",
        "r": "\r",
        "t": "\t"
    };

    function J(R, B, F) {
        return B ? Y[B] : String.fromCharCode(parseInt(F, 16));
    }

    var C = new String("");
    var V = "\\";
    var W = {
        "{": Object,
        "[": Array
    };
    var l = Object.hasOwnProperty;
    return function (R, B) {
        var F = R.match(L);
        var E;
        var I = F[0];
        var K = ![];

        if ("{" === I) {
            E = {};
        } else {
            if ("[" === I) {
                E = [];
            } else {
                E = [];
                K = !![];
            }
        }

        var T;
        var Z = [E];

        for (var M = 1 - K, U = F.length; M < U; ++M) {
            I = F[M];
            var H;

            switch (I.charCodeAt(0)) {
                default:
                    H = Z[0];
                    H[T || H.length] = +I;
                    T = void 0;
                    break;

                case 34:
                    I = I.substring(1, I.length - 1);

                    if (I.indexOf(V) !== -1) {
                        I = I.replace(S, J);
                    }

                    H = Z[0];

                    if (!T) {
                        if (H instanceof Array) T = H.length;else {
                            T = I || C;
                            break;
                        }
                    }

                    H[T] = I;
                    T = void 0;
                    break;

                case 91:
                    H = Z[0];
                    Z.unshift(H[T || H.length] = []);
                    T = void 0;
                    break;

                case 93:
                    Z.shift();
                    break;

                case 102:
                    H = Z[0];
                    H[T || H.length] = ![];
                    T = void 0;
                    break;

                case 110:
                    H = Z[0];
                    H[T || H.length] = null;
                    T = void 0;
                    break;

                case 116:
                    H = Z[0];
                    H[T || H.length] = !![];
                    T = void 0;
                    break;

                case 123:
                    H = Z[0];
                    Z.unshift(H[T || H.length] = {});
                    T = void 0;
                    break;

                case 125:
                    Z.shift();
                    break;
            }
        }

        if (K) {
            if (Z.length !== 1) throw new Error();
            E = E[0];
        } else {
            if (Z.length) throw new Error();
        }

        if (B) {
            var O = function (X, G) {
                var N = X[G];

                if (N && typeof N === "object") {
                    var Q = null;

                    for (var P in N) {
                        if (l.call(N, P) && N !== X) {
                            var p0 = O(N, P);

                            if (p0 !== void 0) {
                                N[P] = p0;
                            } else {
                                !Q && (Q = []);
                                Q.push(P);
                            }
                        }
                    }

                    if (Q) for (var p1 = Q.length; --p1 >= 0;) {
                        delete N[Q[p1]];
                    }
                }

                return B.call(X, G, N);
            };

            E = O({
                "": E
            }, "");
        }

        return E;
    };
}();

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) {
    KJUR.asn1 = {};
}

KJUR.asn1.ASN1Util = new function () {
    this.integerToByteHex = function (p) {
        var n = p.toString(16);
        return n.length % 2 == 1 && (n = "0" + n), n;
    };

    this.bigIntToMinTwosComplementsHex = function (p) {
        var n = p.toString(16);
        if (n.substr(0, 1) != "-") {
            if (n.length % 2 == 1) {
                n = "0" + n;
            } else {
                if (!n.match(/^[0-7]/)) {
                    n = "00" + n;
                }
            }
        } else {
            var A = n.substr(1);
            var L = A.length;

            if (L % 2 == 1) {
                L += 1;
            } else {
                if (!n.match(/^[0-7]/)) {
                    L += 2;
                }
            }

            var S = "";

            for (var Y = 0; Y < L; Y++) {
                S += "f";
            }

            var J = new BigInteger(S, 16);
            var C = J.xor(p).add(BigInteger.ONE);
            n = C.toString(16).replace(/^-/, "");
        }
        return n;
    };

    this.getPEMStringFromHex = function (p, n) {
        return hextopem(p, n);
    };

    this.newObject = function (a) {
        var L = KJUR;
        var S = L.asn1;
        var Y = S.DERBoolean;
        var J = S.DERInteger;
        var V = S.DERBitString;
        var W = S.DEROctetString;
        var R = S.DERNull;
        var I = S.DERObjectIdentifier;
        var K = S.DEREnumerated;
        var T = S.DERUTF8String;
        var i = S.DERNumericString;
        var Z = S.DERPrintableString;
        var M = S.DERTeletexString;
        var U = S.DERIA5String;
        var H = S.DERUTCTime;
        var O = S.DERGeneralizedTime;
        var X = S.DERSequence;
        var G = S.DERSet;
        var N = S.DERTaggedObject;
        var Q = S.ASN1Util.newObject;
        var P = Object.keys(a);
        if (P.length != 1) throw "key of param shall be only one.";
        var p0 = P[0];
        if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + p0 + ":") == -1) throw "undefined key: " + p0;
        if (p0 == "bool") return new Y(a[p0]);
        if (p0 == "int") return new J(a[p0]);
        if (p0 == "bitstr") return new V(a[p0]);
        if (p0 == "octstr") return new W(a[p0]);
        if (p0 == "null") return new R(a[p0]);
        if (p0 == "oid") return new I(a[p0]);
        if (p0 == "enum") return new K(a[p0]);
        if (p0 == "utf8str") return new T(a[p0]);
        if (p0 == "numstr") return new i(a[p0]);
        if (p0 == "prnstr") return new Z(a[p0]);
        if (p0 == "telstr") return new M(a[p0]);
        if (p0 == "ia5str") return new U(a[p0]);
        if (p0 == "utctime") return new H(a[p0]);
        if (p0 == "gentime") return new O(a[p0]);

        if (p0 == "seq") {
            var p1 = a[p0];
            var p2 = [];

            for (var p3 = 0; p3 < p1.length; p3++) {
                var p4 = Q(p1[p3]);
                p2.push(p4);
            }

            return new X({
                "array": p2
            });
        }

        if (p0 == "set") {
            var p1 = a[p0];
            var p2 = [];

            for (var p3 = 0; p3 < p1.length; p3++) {
                var p4 = Q(p1[p3]);
                p2.push(p4);
            }

            return new G({
                "array": p2
            });
        }

        if (p0 == "tag") {
            var p5 = a[p0];

            if (Object.prototype.toString.call(p5) === "[object Array]" && p5.length == 3) {
                var p6 = Q(p5[2]);
                return new N({
                    "tag": p5[0],
                    "explicit": p5[1],
                    "obj": p6
                });
            } else {
                var p7 = {};

                if (p5.explicit !== undefined) {
                    p7.explicit = p5.explicit;
                }

                if (p5.tag !== undefined) {
                    p7.tag = p5.tag;
                }

                if (p5.obj === undefined) throw "obj shall be specified for 'tag'.";
                return p7.obj = Q(p5.obj), new N(p7);
            }
        }
    };

    this.jsonToASN1HEX = function (p) {
        var n = this.newObject(p);
        return n.getEncodedHex();
    };
}();

KJUR.asn1.ASN1Util.oidHexToInt = function (p) {
    var n = "";
    var A = parseInt(p.substr(0, 2), 16);
    var L = Math.floor(A / 40);
    var S = A % 40;
    var n = L + "." + S;
    var Y = "";

    for (var J = 2; J < p.length; J += 2) {
        var C = parseInt(p.substr(J, 2), 16);
        var V = ("00000000" + C.toString(2)).slice(-8);
        Y = Y + V.substr(1, 7);

        if (V.substr(0, 1) == "0") {
            var W = new BigInteger(Y, 2);
            n = n + "." + W.toString(10);
            Y = "";
        }
    }

    return n;
};

KJUR.asn1.ASN1Util.oidIntToHex = function (p) {
    var n = function (J) {
        var C = J.toString(16);
        return C.length == 1 && (C = "0" + C), C;
    };

    var a = function (J) {
        var C = "";
        var V = new BigInteger(J, 10);
        var W = V.toString(2);
        var R = 7 - W.length % 7;

        if (R == 7) {
            R = 0;
        }

        var B = "";

        for (var F = 0; F < R; F++) {
            B += "0";
        }

        W = B + W;

        for (var F = 0; F < W.length - 1; F += 7) {
            var E = W.substr(F, 7);
            F != W.length - 7 && (E = "1" + E);
            C += n(parseInt(E, 2));
        }

        return C;
    };

    if (!p.match(/^[0-9.]+$/)) throw "malformed oid string: " + p;
    var A = "";
    var L = p.split(".");
    var S = parseInt(L[0]) * 40 + parseInt(L[1]);
    A += n(S);
    L.splice(0, 2);

    for (var Y = 0; Y < L.length; Y++) {
        A += a(L[Y]);
    }

    return A;
};

KJUR.asn1.ASN1Object = function () {
    var p = !![];
    var n = null;
    var A = "00";
    var L = "00";
    var g = "";

    this.getLengthHexFromValue = function () {
        if (typeof this.hV == "undefined" || this.hV == null) throw "this.hV is null or undefined.";
        if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + g.length + ",v=" + this.hV;
        var S = this.hV.length / 2;
        var Y = S.toString(16);

        if (Y.length % 2 == 1) {
            Y = "0" + Y;
        }

        if (S < 128) return Y;else {
            var J = Y.length / 2;
            if (J > 15) throw "ASN.1 length too long to represent by 8x: n = " + S.toString(16);
            var C = 128 + J;
            return C.toString(16) + Y;
        }
    };

    this.getEncodedHex = function () {
        return (this.hTLV == null || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = ![]), this.hTLV;
    };

    this.getValueHex = function () {
        return this.getEncodedHex(), this.hV;
    };

    this.getFreshValueHex = function () {
        return "";
    };
};

KJUR.asn1.DERAbstractString = function (p) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    var n = null;
    var A = null;

    this.getString = function () {
        return this.s;
    };

    this.setString = function (L) {
        this.hTLV = null;
        this.isModified = !![];
        this.s = L;
        this.hV = utf8tohex(this.s).toLowerCase();
    };

    this.setStringHex = function (L) {
        this.hTLV = null;
        this.isModified = !![];
        this.s = null;
        this.hV = L;
    };

    this.getFreshValueHex = function () {
        return this.hV;
    };

    typeof p != "undefined" && (typeof p == "string" ? this.setString(p) : typeof p.str != "undefined" ? this.setString(p.str) : typeof p.hex != "undefined" && this.setStringHex(p.hex));
};

YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);

KJUR.asn1.DERAbstractTime = function (p) {
    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
    var n = null;
    var A = null;

    this.localDateToUTC = function (L) {
        var S = L.getTime() + L.getTimezoneOffset() * 60000;
        var Y = new Date(S);
        return Y;
    };

    this.formatDate = function (L, S, Y) {
        var J = this.zeroPadding;
        var C = this.localDateToUTC(L);
        var V = String(C.getFullYear());

        if (S == "utc") {
            V = V.substr(2, 2);
        }

        var W = J(String(C.getMonth() + 1), 2);
        var R = J(String(C.getDate()), 2);
        var B = J(String(C.getHours()), 2);
        var F = J(String(C.getMinutes()), 2);
        var E = J(String(C.getSeconds()), 2);
        var s = V + W + R + B + F + E;

        if (Y === !![]) {
            var I = C.getMilliseconds();

            if (I != 0) {
                var K = J(String(I), 3);
                K = K.replace(/[0]+$/, "");
                s = s + "." + K;
            }
        }

        return s + "Z";
    };

    this.zeroPadding = function (L, g) {
        if (L.length >= g) return L;
        return new Array(g - L.length + 1).join("0") + L;
    };

    this.getString = function () {
        return this.s;
    };

    this.setString = function (L) {
        this.hTLV = null;
        this.isModified = !![];
        this.s = L;
        this.hV = stohex(L);
    };

    this.setByDateValue = function (L, S, Y, J, C, V) {
        var W = new Date(Date.UTC(L, S - 1, Y, J, C, V, 0));
        this.setByDate(W);
    };

    this.getFreshValueHex = function () {
        return this.hV;
    };
};

YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);

KJUR.asn1.DERAbstractStructured = function (p) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    var n = null;

    this.setByASN1ObjectArray = function (A) {
        this.hTLV = null;
        this.isModified = !![];
        this.asn1Array = A;
    };

    this.appendASN1Object = function (A) {
        this.hTLV = null;
        this.isModified = !![];
        this.asn1Array.push(A);
    };

    this.asn1Array = new Array();
    typeof p != "undefined" && typeof p.array != "undefined" && (this.asn1Array = p.array);
};

YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);

KJUR.asn1.DERBoolean = function () {
    KJUR.asn1.DERBoolean.superclass.constructor.call(this);
    this.hT = "01";
    this.hTLV = "0101ff";
};

YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);

KJUR.asn1.DERInteger = function (p) {
    KJUR.asn1.DERInteger.superclass.constructor.call(this);
    this.hT = "02";

    this.setByBigInteger = function (n) {
        this.hTLV = null;
        this.isModified = !![];
        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(n);
    };

    this.setByInteger = function (n) {
        var A = new BigInteger(String(n), 10);
        this.setByBigInteger(A);
    };

    this.setValueHex = function (n) {
        this.hV = n;
    };

    this.getFreshValueHex = function () {
        return this.hV;
    };

    typeof p != "undefined" && (typeof p.bigint != "undefined" ? this.setByBigInteger(p.bigint) : typeof p.int != "undefined" ? this.setByInteger(p.int) : typeof p == "number" ? this.setByInteger(p) : typeof p.hex != "undefined" && this.setValueHex(p.hex));
};

YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);

KJUR.asn1.DERBitString = function (p) {
    if (p !== undefined && typeof p.obj !== "undefined") {
        var n = KJUR.asn1.ASN1Util.newObject(p.obj);
        p.hex = "00" + n.getEncodedHex();
    }

    KJUR.asn1.DERBitString.superclass.constructor.call(this);
    this.hT = "03";

    this.setHexValueIncludingUnusedBits = function (A) {
        this.hTLV = null;
        this.isModified = !![];
        this.hV = A;
    };

    this.setUnusedBitsAndHexValue = function (A, L) {
        if (A < 0 || 7 < A) throw "unused bits shall be from 0 to 7: u = " + A;
        var g = "0" + A;
        this.hTLV = null;
        this.isModified = !![];
        this.hV = g + L;
    };

    this.setByBinaryString = function (A) {
        A = A.replace(/0+$/, "");
        var L = 8 - A.length % 8;

        if (L == 8) {
            L = 0;
        }

        for (var S = 0; S <= L; S++) {
            A += "0";
        }

        var Y = "";

        for (var S = 0; S < A.length - 1; S += 8) {
            var J = A.substr(S, 8);
            var C = parseInt(J, 2).toString(16);
            C.length == 1 && (C = "0" + C);
            Y += C;
        }

        this.hTLV = null;
        this.isModified = !![];
        this.hV = "0" + L + Y;
    };

    this.setByBooleanArray = function (A) {
        var L = "";

        for (var g = 0; g < A.length; g++) {
            if (A[g] == !![]) {
                L += "1";
            } else {
                L += "0";
            }
        }

        this.setByBinaryString(L);
    };

    this.newFalseArray = function (A) {
        var L = new Array(A);

        for (var g = 0; g < A; g++) {
            L[g] = ![];
        }

        return L;
    };

    this.getFreshValueHex = function () {
        return this.hV;
    };

    typeof p != "undefined" && (typeof p == "string" && p.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(p) : typeof p.hex != "undefined" ? this.setHexValueIncludingUnusedBits(p.hex) : typeof p.bin != "undefined" ? this.setByBinaryString(p.bin) : typeof p.array != "undefined" && this.setByBooleanArray(p.array));
};

YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);

KJUR.asn1.DEROctetString = function (p) {
    if (p !== undefined && typeof p.obj !== "undefined") {
        var n = KJUR.asn1.ASN1Util.newObject(p.obj);
        p.hex = n.getEncodedHex();
    }

    KJUR.asn1.DEROctetString.superclass.constructor.call(this, p);
    this.hT = "04";
};

YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);

KJUR.asn1.DERNull = function () {
    KJUR.asn1.DERNull.superclass.constructor.call(this);
    this.hT = "05";
    this.hTLV = "0500";
};

YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);

KJUR.asn1.DERObjectIdentifier = function (p) {
    var n = function (L) {
        var g = L.toString(16);
        return g.length == 1 && (g = "0" + g), g;
    };

    var A = function (L) {
        var S = "";
        var Y = new BigInteger(L, 10);
        var J = Y.toString(2);
        var C = 7 - J.length % 7;

        if (C == 7) {
            C = 0;
        }

        var V = "";

        for (var W = 0; W < C; W++) {
            V += "0";
        }

        J = V + J;

        for (var W = 0; W < J.length - 1; W += 7) {
            var R = J.substr(W, 7);
            W != J.length - 7 && (R = "1" + R);
            S += n(parseInt(R, 2));
        }

        return S;
    };

    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
    this.hT = "06";

    this.setValueHex = function (L) {
        this.hTLV = null;
        this.isModified = !![];
        this.s = null;
        this.hV = L;
    };

    this.setValueOidString = function (L) {
        if (!L.match(/^[0-9.]+$/)) throw "malformed oid string: " + L;
        var S = "";
        var Y = L.split(".");
        var J = parseInt(Y[0]) * 40 + parseInt(Y[1]);
        S += n(J);
        Y.splice(0, 2);

        for (var C = 0; C < Y.length; C++) {
            S += A(Y[C]);
        }

        this.hTLV = null;
        this.isModified = !![];
        this.s = null;
        this.hV = S;
    };

    this.setValueName = function (L) {
        var g = KJUR.asn1.x509.OID.name2oid(L);
        if (g !== "") this.setValueOidString(g);else throw "DERObjectIdentifier oidName undefined: " + L;
    };

    this.getFreshValueHex = function () {
        return this.hV;
    };

    p !== undefined && (typeof p === "string" ? p.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(p) : this.setValueName(p) : p.oid !== undefined ? this.setValueOidString(p.oid) : p.hex !== undefined ? this.setValueHex(p.hex) : p.name !== undefined && this.setValueName(p.name));
};

YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);

KJUR.asn1.DEREnumerated = function (p) {
    KJUR.asn1.DEREnumerated.superclass.constructor.call(this);
    this.hT = "0a";

    this.setByBigInteger = function (n) {
        this.hTLV = null;
        this.isModified = !![];
        this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(n);
    };

    this.setByInteger = function (n) {
        var A = new BigInteger(String(n), 10);
        this.setByBigInteger(A);
    };

    this.setValueHex = function (n) {
        this.hV = n;
    };

    this.getFreshValueHex = function () {
        return this.hV;
    };

    typeof p != "undefined" && (typeof p.int != "undefined" ? this.setByInteger(p.int) : typeof p == "number" ? this.setByInteger(p) : typeof p.hex != "undefined" && this.setValueHex(p.hex));
};

YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object);

KJUR.asn1.DERUTF8String = function (p) {
    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, p);
    this.hT = "0c";
};

YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);

KJUR.asn1.DERNumericString = function (p) {
    KJUR.asn1.DERNumericString.superclass.constructor.call(this, p);
    this.hT = "12";
};

YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);

KJUR.asn1.DERPrintableString = function (p) {
    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, p);
    this.hT = "13";
};

YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);

KJUR.asn1.DERTeletexString = function (p) {
    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, p);
    this.hT = "14";
};

YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);

KJUR.asn1.DERIA5String = function (p) {
    KJUR.asn1.DERIA5String.superclass.constructor.call(this, p);
    this.hT = "16";
};

YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);

KJUR.asn1.DERUTCTime = function (p) {
    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, p);
    this.hT = "17";

    this.setByDate = function (n) {
        this.hTLV = null;
        this.isModified = !![];
        this.date = n;
        this.s = this.formatDate(this.date, "utc");
        this.hV = stohex(this.s);
    };

    this.getFreshValueHex = function () {
        return typeof this.date == "undefined" && typeof this.s == "undefined" && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV;
    };

    p !== undefined && (p.str !== undefined ? this.setString(p.str) : typeof p == "string" && p.match(/^[0-9]{12}Z$/) ? this.setString(p) : p.hex !== undefined ? this.setStringHex(p.hex) : p.date !== undefined && this.setByDate(p.date));
};

YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);

KJUR.asn1.DERGeneralizedTime = function (p) {
    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, p);
    this.hT = "18";
    this.withMillis = ![];

    this.setByDate = function (n) {
        this.hTLV = null;
        this.isModified = !![];
        this.date = n;
        this.s = this.formatDate(this.date, "gen", this.withMillis);
        this.hV = stohex(this.s);
    };

    this.getFreshValueHex = function () {
        return this.date === undefined && this.s === undefined && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV;
    };

    p !== undefined && (p.str !== undefined ? this.setString(p.str) : typeof p == "string" && p.match(/^[0-9]{14}Z$/) ? this.setString(p) : p.hex !== undefined ? this.setStringHex(p.hex) : p.date !== undefined && this.setByDate(p.date), p.millis === !![] && (this.withMillis = !![]));
};

YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);

KJUR.asn1.DERSequence = function (p) {
    KJUR.asn1.DERSequence.superclass.constructor.call(this, p);
    this.hT = "30";

    this.getFreshValueHex = function () {
        var n = "";

        for (var A = 0; A < this.asn1Array.length; A++) {
            var L = this.asn1Array[A];
            n += L.getEncodedHex();
        }

        return this.hV = n, this.hV;
    };
};

YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);

KJUR.asn1.DERSet = function (p) {
    KJUR.asn1.DERSet.superclass.constructor.call(this, p);
    this.hT = "31";
    this.sortFlag = !![];

    this.getFreshValueHex = function () {
        var n = new Array();

        for (var A = 0; A < this.asn1Array.length; A++) {
            var L = this.asn1Array[A];
            n.push(L.getEncodedHex());
        }

        return this.sortFlag == !![] && n.sort(), this.hV = n.join(""), this.hV;
    };

    typeof p != "undefined" && typeof p.sortflag != "undefined" && p.sortflag == ![] && (this.sortFlag = ![]);
};

YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);

KJUR.asn1.DERTaggedObject = function (p) {
    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
    this.hT = "a0";
    this.hV = "";
    this.isExplicit = !![];
    this.asn1Object = null;

    this.setASN1Object = function (n, A, L) {
        this.hT = A;
        this.isExplicit = n;
        this.asn1Object = L;
        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !![]) : (this.hV = null, this.hTLV = L.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, A), this.isModified = ![]);
    };

    this.getFreshValueHex = function () {
        return this.hV;
    };

    typeof p != "undefined" && (typeof p.tag != "undefined" && (this.hT = p.tag), typeof p.explicit != "undefined" && (this.isExplicit = p.explicit), typeof p.obj != "undefined" && (this.asn1Object = p.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
};

YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
var ASN1HEX = new function () {}();

ASN1HEX.getLblen = function (p, n) {
    if (p.substr(n + 2, 1) != "8") return 1;
    var A = parseInt(p.substr(n + 3, 1));
    if (A == 0) return -1;
    if (0 < A && A < 10) return A + 1;
    return -2;
};

ASN1HEX.getL = function (p, n) {
    var A = ASN1HEX.getLblen(p, n);
    if (A < 1) return "";
    return p.substr(n + 2, A * 2);
};

ASN1HEX.getVblen = function (p, n) {
    var A;
    var L;
    A = ASN1HEX.getL(p, n);
    if (A == "") return -1;
    return A.substr(0, 1) === "8" ? L = new BigInteger(A.substr(2), 16) : L = new BigInteger(A, 16), L.intValue();
};

ASN1HEX.getVidx = function (p, n) {
    var A = ASN1HEX.getLblen(p, n);
    if (A < 0) return A;
    return n + (A + 1) * 2;
};

ASN1HEX.getV = function (p, n) {
    var A = ASN1HEX.getVidx(p, n);
    var L = ASN1HEX.getVblen(p, n);
    return p.substr(A, L * 2);
};

ASN1HEX.getTLV = function (p, n) {
    return p.substr(n, 2) + ASN1HEX.getL(p, n) + ASN1HEX.getV(p, n);
};

ASN1HEX.getNextSiblingIdx = function (p, n) {
    var A = ASN1HEX.getVidx(p, n);
    var L = ASN1HEX.getVblen(p, n);
    return A + L * 2;
};

ASN1HEX.getChildIdx = function (p, n) {
    var a = ASN1HEX;
    var A = new Array();
    var L = a.getVidx(p, n);

    if (p.substr(n, 2) == "03") {
        A.push(L + 2);
    } else {
        A.push(L);
    }

    var S = a.getVblen(p, n);
    var Y = L;
    var J = 0;

    while (1) {
        var C = a.getNextSiblingIdx(p, Y);
        if (C == null || C - L >= S * 2) break;
        if (J >= 200) break;
        A.push(C);
        Y = C;
        J++;
    }

    return A;
};

ASN1HEX.getNthChildIdx = function (p, n, a) {
    var A = ASN1HEX.getChildIdx(p, n);
    return A[a];
};

ASN1HEX.getIdxbyList = function (p, n, a, A) {
    var L = ASN1HEX;
    var S;
    var Y;

    if (a.length == 0) {
        if (A !== undefined) {
            if (p.substr(n, 2) !== A) throw Error("checking tag doesn't match: " + p.substr(n, 2) + "!=" + A);
        }

        return n;
    }

    return S = a.shift(), Y = L.getChildIdx(p, n), L.getIdxbyList(p, Y[S], a, A);
};

ASN1HEX.getTLVbyList = function (p, n, A, L) {
    var g = ASN1HEX;
    var S = g.getIdxbyList(p, n, A);
    if (S === undefined) throw "can't find nthList object";

    if (L !== undefined) {
        if (p.substr(S, 2) != L) throw "checking tag doesn't match: " + p.substr(S, 2) + "!=" + L;
    }

    return g.getTLV(p, S);
};

ASN1HEX.getVbyList = function (p, n, A, L, S) {
    var Y = ASN1HEX;
    var J;
    var C;
    J = Y.getIdxbyList(p, n, A, L);
    if (J === undefined) throw "can't find nthList object";
    return C = Y.getV(p, J), S === !![] && (C = C.substr(2)), C;
};

ASN1HEX.hextooidstr = function (p) {
    var c = function (W, R) {
        if (W.length >= R) return W;
        return new Array(R - W.length + 1).join("0") + W;
    };

    var a = [];
    var A = p.substr(0, 2);
    var L = parseInt(A, 16);
    a[0] = new String(Math.floor(L / 40));
    a[1] = new String(L % 40);
    var S = p.substr(2);
    var Y = [];

    for (var J = 0; J < S.length / 2; J++) {
        Y.push(parseInt(S.substr(J * 2, 2), 16));
    }

    var b = [];
    var C = "";

    for (var J = 0; J < Y.length; J++) {
        if (Y[J] & 128) {
            C = C + c((Y[J] & 127).toString(2), 7);
        } else {
            C = C + c((Y[J] & 127).toString(2), 7);
            b.push(new String(parseInt(C, 2)));
            C = "";
        }
    }

    var V = a.join(".");
    return b.length > 0 && (V = V + "." + b.join(".")), V;
};

ASN1HEX.dump = function (A, L, S, Y) {
    var J = ASN1HEX;
    var C = J.getV;
    var V = J.dump;
    var W = J.getChildIdx;
    var R = A;

    if (A instanceof KJUR.asn1.ASN1Object) {
        R = A.getEncodedHex();
    }

    var B = function (G, N) {
        if (G.length <= N * 2) return G;else {
            var D = G.substr(0, N) + "..(total " + G.length / 2 + "bytes).." + G.substr(G.length - N, N);
            return D;
        }
    };

    if (L === undefined) {
        L = {
            "ommit_long_octet": 32
        };
    }

    if (S === undefined) {
        S = 0;
    }

    if (Y === undefined) {
        Y = "";
    }

    var F = L.ommit_long_octet;

    if (R.substr(S, 2) == "01") {
        var E = C(R, S);
        return E == "00" ? Y + "BOOLEAN FALSE\n" : Y + "BOOLEAN TRUE\n";
    }

    if (R.substr(S, 2) == "02") {
        var E = C(R, S);
        return Y + "INTEGER " + B(E, F) + "\n";
    }

    if (R.substr(S, 2) == "03") {
        var E = C(R, S);
        return Y + "BITSTRING " + B(E, F) + "\n";
    }

    if (R.substr(S, 2) == "04") {
        var E = C(R, S);

        if (J.isASN1HEX(E)) {
            var s = Y + "OCTETSTRING, encapsulates\n";
            return s = s + V(E, L, 0, Y + "  "), s;
        } else return Y + "OCTETSTRING " + B(E, F) + "\n";
    }

    if (R.substr(S, 2) == "05") return Y + "NULL\n";

    if (R.substr(S, 2) == "06") {
        var I = C(R, S);
        var K = KJUR.asn1.ASN1Util.oidHexToInt(I);
        var T = KJUR.asn1.x509.OID.oid2name(K);
        var i = K.replace(/\./g, " ");
        return T != "" ? Y + "ObjectIdentifier " + T + " (" + i + ")\n" : Y + "ObjectIdentifier (" + i + ")\n";
    }

    if (R.substr(S, 2) == "0c") return Y + "UTF8String '" + hextoutf8(C(R, S)) + "'\n";
    if (R.substr(S, 2) == "13") return Y + "PrintableString '" + hextoutf8(C(R, S)) + "'\n";
    if (R.substr(S, 2) == "14") return Y + "TeletexString '" + hextoutf8(C(R, S)) + "'\n";
    if (R.substr(S, 2) == "16") return Y + "IA5String '" + hextoutf8(C(R, S)) + "'\n";
    if (R.substr(S, 2) == "17") return Y + "UTCTime " + hextoutf8(C(R, S)) + "\n";
    if (R.substr(S, 2) == "18") return Y + "GeneralizedTime " + hextoutf8(C(R, S)) + "\n";

    if (R.substr(S, 2) == "30") {
        if (R.substr(S, 4) == "3000") return Y + "SEQUENCE {}\n";
        var s = Y + "SEQUENCE\n";
        var Z = W(R, S);
        var M = L;

        if ((Z.length == 2 || Z.length == 3) && R.substr(Z[0], 2) == "06" && R.substr(Z[Z.length - 1], 2) == "04") {
            var T = J.oidname(C(R, Z[0]));
            var U = JSON.parse(JSON.stringify(L));
            U.x509ExtName = T;
            M = U;
        }

        for (var H = 0; H < Z.length; H++) {
            s = s + V(R, M, Z[H], Y + "  ");
        }

        return s;
    }

    if (R.substr(S, 2) == "31") {
        var s = Y + "SET\n";
        var Z = W(R, S);

        for (var H = 0; H < Z.length; H++) {
            s = s + V(R, L, Z[H], Y + "  ");
        }

        return s;
    }

    var O = parseInt(R.substr(S, 2), 16);

    if ((O & 128) != 0) {
        var X = O & 31;

        if ((O & 32) != 0) {
            var s = Y + "[" + X + "]\n";
            var Z = W(R, S);

            for (var H = 0; H < Z.length; H++) {
                s = s + V(R, L, Z[H], Y + "  ");
            }

            return s;
        } else {
            var E = C(R, S);

            if (E.substr(0, 8) == "68747470") {
                E = hextoutf8(E);
            }

            if (L.x509ExtName === "subjectAltName" && X == 2) {
                E = hextoutf8(E);
            }

            var s = Y + "[" + X + "] " + E + "\n";
            return s;
        }
    }

    return Y + "UNKNOWN(" + R.substr(S, 2) + ") " + C(R, S) + "\n";
};

ASN1HEX.isASN1HEX = function (p) {
    var n = ASN1HEX;
    if (p.length % 2 == 1) return ![];
    var A = n.getVblen(p, 0);
    var L = p.substr(0, 2);
    var g = n.getL(p, 0);
    var S = p.length - L.length - g.length;
    if (S == A * 2) return !![];
    return ![];
};

ASN1HEX.checkStrictDER = function (A, L, S, Y, J) {
    var C = ASN1HEX;

    if (S === undefined) {
        if (typeof A != "string") throw new Error("not hex string");
        A = A.toLowerCase();
        if (!KJUR.lang.String.isHex(A)) throw new Error("not hex string");
        S = A.length;
        Y = A.length / 2;
        Y < 128 ? J = 1 : J = Math.ceil(Y.toString(16)) + 1;
    }

    var V = C.getL(A, L);
    if (V.length > J * 2) throw new Error("L of TLV too long: idx=" + L);
    var W = C.getVblen(A, L);
    if (W > Y) throw new Error("value of L too long than hex: idx=" + L);
    var R = C.getTLV(A, L);
    var B = R.length - 2 - C.getL(A, L).length;
    if (B !== W * 2) throw new Error("V string length and L's value not the same:" + B + "/" + W * 2);

    if (L === 0) {
        if (A.length != R.length) throw new Error("total length and TLV length unmatch:" + A.length + "!=" + R.length);
    }

    var F = A.substr(L, 2);

    if (F === "02") {
        var E = C.getVidx(A, L);
        if (A.substr(E, 2) == "00" && A.charCodeAt(E + 2) < 56) throw new Error("not least zeros for DER INTEGER");
    }

    if (parseInt(F, 16) & 32) {
        var I = C.getVblen(A, L);
        var K = 0;
        var T = C.getChildIdx(A, L);

        for (var i = 0; i < T.length; i++) {
            var Z = C.getTLV(A, T[i]);
            K += Z.length;
            C.checkStrictDER(A, T[i], S, Y, J);
        }

        if (I * 2 != K) throw new Error("sum of children's TLV length and L unmatch: " + I * 2 + "!=" + K);
    }
};

ASN1HEX.oidname = function (p) {
    var n = KJUR.asn1;

    if (KJUR.lang.String.isHex(p)) {
        p = n.ASN1Util.oidHexToInt(p);
    }

    var A = n.x509.OID.oid2name(p);
    return A === "" && (A = p), A;
};

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) {
    KJUR.asn1 = {};
}

if (typeof KJUR.asn1.x509 == "undefined" || !KJUR.asn1.x509) {
    KJUR.asn1.x509 = {};
}

KJUR.asn1.x509.Certificate = function (p) {
    KJUR.asn1.x509.Certificate.superclass.constructor.call(this);
    var n = null;
    var A = null;
    var L = null;
    var S = null;
    var Y = null;
    var J = KJUR;
    var C = J.crypto;
    var V = J.asn1;
    var W = V.DERSequence;
    var l = V.DERBitString;

    this.sign = function () {
        this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg;
        var R = new KJUR.crypto.Signature({
            "alg": this.asn1SignatureAlg.nameAlg
        });
        R.init(this.prvKey);
        R.updateHex(this.asn1TBSCert.getEncodedHex());
        this.hexSig = R.sign();
        this.asn1Sig = new l({
            "hex": "00" + this.hexSig
        });
        var B = new W({
            "array": [this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig]
        });
        this.hTLV = B.getEncodedHex();
        this.isModified = ![];
    };

    this.setSignatureHex = function (R) {
        this.asn1SignatureAlg = this.asn1TBSCert.asn1SignatureAlg;
        this.hexSig = R;
        this.asn1Sig = new l({
            "hex": "00" + this.hexSig
        });
        var B = new W({
            "array": [this.asn1TBSCert, this.asn1SignatureAlg, this.asn1Sig]
        });
        this.hTLV = B.getEncodedHex();
        this.isModified = ![];
    };

    this.getEncodedHex = function () {
        if (this.isModified == ![] && this.hTLV != null) return this.hTLV;
        throw "not signed yet";
    };

    this.getPEMString = function () {
        var R = hextob64nl(this.getEncodedHex());
        return "-----BEGIN CERTIFICATE-----\r\n" + R + "\r\n-----END CERTIFICATE-----\r\n";
    };

    p !== undefined && (p.tbscertobj !== undefined && (this.asn1TBSCert = p.tbscertobj), p.prvkeyobj !== undefined && (this.prvKey = p.prvkeyobj));
};

YAHOO.lang.extend(KJUR.asn1.x509.Certificate, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.TBSCertificate = function (p) {
    KJUR.asn1.x509.TBSCertificate.superclass.constructor.call(this);
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var S = A.DERInteger;
    var Y = A.DERTaggedObject;
    var J = A.x509;
    var C = J.Time;
    var V = J.X500Name;
    var W = J.SubjectPublicKeyInfo;

    this._initialize = function () {
        this.asn1Array = new Array();
        this.asn1Version = new Y({
            "obj": new S({
                "int": 2
            })
        });
        this.asn1SerialNumber = null;
        this.asn1SignatureAlg = null;
        this.asn1Issuer = null;
        this.asn1NotBefore = null;
        this.asn1NotAfter = null;
        this.asn1Subject = null;
        this.asn1SubjPKey = null;
        this.extensionsArray = new Array();
    };

    this.setSerialNumberByParam = function (l) {
        this.asn1SerialNumber = new S(l);
    };

    this.setSignatureAlgByParam = function (l) {
        this.asn1SignatureAlg = new J.AlgorithmIdentifier(l);
    };

    this.setIssuerByParam = function (l) {
        this.asn1Issuer = new V(l);
    };

    this.setNotBeforeByParam = function (l) {
        this.asn1NotBefore = new C(l);
    };

    this.setNotAfterByParam = function (l) {
        this.asn1NotAfter = new C(l);
    };

    this.setSubjectByParam = function (l) {
        this.asn1Subject = new V(l);
    };

    this.setSubjectPublicKey = function (l) {
        this.asn1SubjPKey = new W(l);
    };

    this.setSubjectPublicKeyByGetKey = function (R) {
        var B = KEYUTIL.getKey(R);
        this.asn1SubjPKey = new W(B);
    };

    this.appendExtension = function (l) {
        this.extensionsArray.push(l);
    };

    this.appendExtensionByName = function (R, B) {
        KJUR.asn1.x509.Extension.appendByNameToArray(R, B, this.extensionsArray);
    };

    this.getEncodedHex = function () {
        if (this.asn1NotBefore == null || this.asn1NotAfter == null) throw "notBefore and/or notAfter not set";
        var R = new L({
            "array": [this.asn1NotBefore, this.asn1NotAfter]
        });
        this.asn1Array = new Array();
        this.asn1Array.push(this.asn1Version);
        this.asn1Array.push(this.asn1SerialNumber);
        this.asn1Array.push(this.asn1SignatureAlg);
        this.asn1Array.push(this.asn1Issuer);
        this.asn1Array.push(R);
        this.asn1Array.push(this.asn1Subject);
        this.asn1Array.push(this.asn1SubjPKey);

        if (this.extensionsArray.length > 0) {
            var B = new L({
                "array": this.extensionsArray
            });
            var F = new Y({
                "explicit": !![],
                "tag": "a3",
                "obj": B
            });
            this.asn1Array.push(F);
        }

        var E = new L({
            "array": this.asn1Array
        });
        return this.hTLV = E.getEncodedHex(), this.isModified = ![], this.hTLV;
    };

    this._initialize();
};

YAHOO.lang.extend(KJUR.asn1.x509.TBSCertificate, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.Extension = function (p) {
    KJUR.asn1.x509.Extension.superclass.constructor.call(this);
    var n = null;
    var A = KJUR;
    var L = A.asn1;
    var S = L.DERObjectIdentifier;
    var Y = L.DEROctetString;
    var J = L.DERBitString;
    var C = L.DERBoolean;
    var V = L.DERSequence;

    this.getEncodedHex = function () {
        var W = new S({
            "oid": this.oid
        });
        var R = new Y({
            "hex": this.getExtnValueHex()
        });
        var B = new Array();
        B.push(W);

        if (this.critical) {
            B.push(new C());
        }

        B.push(R);
        var F = new V({
            "array": B
        });
        return F.getEncodedHex();
    };

    this.critical = ![];
    p !== undefined && p.critical !== undefined && (this.critical = p.critical);
};

YAHOO.lang.extend(KJUR.asn1.x509.Extension, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.Extension.appendByNameToArray = function (p, n, a) {
    var A = p.toLowerCase();
    var L = KJUR.asn1.x509;

    if (A == "basicconstraints") {
        var S = new L.BasicConstraints(n);
        a.push(S);
    } else {
        if (A == "keyusage") {
            var S = new L.KeyUsage(n);
            a.push(S);
        } else {
            if (A == "crldistributionpoints") {
                var S = new L.CRLDistributionPoints(n);
                a.push(S);
            } else {
                if (A == "extkeyusage") {
                    var S = new L.ExtKeyUsage(n);
                    a.push(S);
                } else {
                    if (A == "authoritykeyidentifier") {
                        var S = new L.AuthorityKeyIdentifier(n);
                        a.push(S);
                    } else {
                        if (A == "subjectkeyidentifier") {
                            var S = new L.SubjectKeyIdentifier(n);
                            a.push(S);
                        } else {
                            if (A == "authorityinfoaccess") {
                                var S = new L.AuthorityInfoAccess(n);
                                a.push(S);
                            } else {
                                if (A == "subjectaltname") {
                                    var S = new L.SubjectAltName(n);
                                    a.push(S);
                                } else {
                                    if (A == "issueraltname") {
                                        var S = new L.IssuerAltName(n);
                                        a.push(S);
                                    } else throw "unsupported extension name: " + p;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

KJUR.asn1.x509.KeyUsage = function (p) {
    KJUR.asn1.x509.KeyUsage.superclass.constructor.call(this, p);
    var n = X509.KEYUSAGE_NAME;

    this.getExtnValueHex = function () {
        return this.asn1ExtnValue.getEncodedHex();
    };

    this.oid = "2.5.29.15";

    if (p !== undefined) {
        if (p.bin !== undefined) {
            this.asn1ExtnValue = new KJUR.asn1.DERBitString(p);
        }

        if (p.names !== undefined && p.names.length !== undefined) {
            var A = p.names;
            var L = "000000000";

            for (var g = 0; g < A.length; g++) {
                for (var S = 0; S < n.length; S++) {
                    if (A[g] === n[S]) {
                        L = L.substring(0, S) + "1" + L.substring(S + 1, L.length);
                    }
                }
            }

            this.asn1ExtnValue = new KJUR.asn1.DERBitString({
                "bin": L
            });
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.x509.KeyUsage, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.BasicConstraints = function (p) {
    KJUR.asn1.x509.BasicConstraints.superclass.constructor.call(this, p);
    var n = ![];
    var A = -1;

    this.getExtnValueHex = function () {
        var L = new Array();

        if (this.cA) {
            L.push(new KJUR.asn1.DERBoolean());
        }

        if (this.pathLen > -1) {
            L.push(new KJUR.asn1.DERInteger({
                "int": this.pathLen
            }));
        }

        var g = new KJUR.asn1.DERSequence({
            "array": L
        });
        return this.asn1ExtnValue = g, this.asn1ExtnValue.getEncodedHex();
    };

    this.oid = "2.5.29.19";
    this.cA = ![];
    this.pathLen = -1;
    p !== undefined && (p.cA !== undefined && (this.cA = p.cA), p.pathLen !== undefined && (this.pathLen = p.pathLen));
};

YAHOO.lang.extend(KJUR.asn1.x509.BasicConstraints, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.CRLDistributionPoints = function (p) {
    KJUR.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, p);
    var n = KJUR;
    var A = n.asn1;
    var L = A.x509;

    this.getExtnValueHex = function () {
        return this.asn1ExtnValue.getEncodedHex();
    };

    this.setByDPArray = function (g) {
        this.asn1ExtnValue = new A.DERSequence({
            "array": g
        });
    };

    this.setByOneURI = function (S) {
        var Y = new L.GeneralNames([{
            "uri": S
        }]);
        var J = new L.DistributionPointName(Y);
        var C = new L.DistributionPoint({
            "dpobj": J
        });
        this.setByDPArray([C]);
    };

    this.oid = "2.5.29.31";
    p !== undefined && (p.array !== undefined ? this.setByDPArray(p.array) : p.uri !== undefined && this.setByOneURI(p.uri));
};

YAHOO.lang.extend(KJUR.asn1.x509.CRLDistributionPoints, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.ExtKeyUsage = function (p) {
    KJUR.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, p);
    var n = KJUR;
    var A = n.asn1;

    this.setPurposeArray = function (L) {
        this.asn1ExtnValue = new A.DERSequence();

        for (var g = 0; g < L.length; g++) {
            var S = new A.DERObjectIdentifier(L[g]);
            this.asn1ExtnValue.appendASN1Object(S);
        }
    };

    this.getExtnValueHex = function () {
        return this.asn1ExtnValue.getEncodedHex();
    };

    this.oid = "2.5.29.37";
    p !== undefined && p.array !== undefined && this.setPurposeArray(p.array);
};

YAHOO.lang.extend(KJUR.asn1.x509.ExtKeyUsage, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.AuthorityKeyIdentifier = function (p) {
    KJUR.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, p);
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERTaggedObject;
    var g = A.x509.GeneralNames;
    var S = n.crypto.Util.isKey;
    this.asn1KID = null;
    this.asn1CertIssuer = null;
    this.asn1CertSN = null;

    this.getExtnValueHex = function () {
        var Y = new Array();

        if (this.asn1KID) {
            Y.push(new L({
                "explicit": ![],
                "tag": "80",
                "obj": this.asn1KID
            }));
        }

        if (this.asn1CertIssuer) {
            Y.push(new L({
                "explicit": ![],
                "tag": "a1",
                "obj": new g([{
                    "dn": this.asn1CertIssuer
                }])
            }));
        }

        if (this.asn1CertSN) {
            Y.push(new L({
                "explicit": ![],
                "tag": "82",
                "obj": this.asn1CertSN
            }));
        }

        var J = new A.DERSequence({
            "array": Y
        });
        return this.asn1ExtnValue = J, this.asn1ExtnValue.getEncodedHex();
    };

    this.setKIDByParam = function (Y) {
        if (Y.str !== undefined || Y.hex !== undefined) this.asn1KID = new KJUR.asn1.DEROctetString(Y);else {
            if (typeof Y === "object" && KJUR.crypto.Util.isKey(Y) || typeof Y === "string" && Y.indexOf("BEGIN ") != -1) {
                var J = Y;

                if (typeof Y === "string") {
                    J = KEYUTIL.getKey(Y);
                }

                var C = KEYUTIL.getKeyID(J);
                this.asn1KID = new KJUR.asn1.DEROctetString({
                    "hex": C
                });
            }
        }
    };

    this.setCertIssuerByParam = function (Y) {
        if (Y.str !== undefined || Y.ldapstr !== undefined || Y.hex !== undefined || Y.certsubject !== undefined || Y.certissuer !== undefined) {
            this.asn1CertIssuer = new KJUR.asn1.x509.X500Name(Y);
        } else {
            if (typeof Y === "string" && Y.indexOf("BEGIN ") != -1 && Y.indexOf("CERTIFICATE") != -1) {
                this.asn1CertIssuer = new KJUR.asn1.x509.X500Name({
                    "certissuer": Y
                });
            }
        }
    };

    this.setCertSNByParam = function (Y) {
        if (Y.str !== undefined || Y.bigint !== undefined || Y.hex !== undefined) this.asn1CertSN = new KJUR.asn1.DERInteger(Y);else {
            if (typeof Y === "string" && Y.indexOf("BEGIN ") != -1 && Y.indexOf("CERTIFICATE")) {
                var J = new X509();
                J.readCertPEM(Y);
                var C = J.getSerialNumberHex();
                this.asn1CertSN = new KJUR.asn1.DERInteger({
                    "hex": C
                });
            }
        }
    };

    this.oid = "2.5.29.35";
    p !== undefined && (p.kid !== undefined && this.setKIDByParam(p.kid), p.issuer !== undefined && this.setCertIssuerByParam(p.issuer), p.sn !== undefined && this.setCertSNByParam(p.sn), p.issuersn !== undefined && typeof p.issuersn === "string" && p.issuersn.indexOf("BEGIN ") != -1 && p.issuersn.indexOf("CERTIFICATE") && (this.setCertSNByParam(p.issuersn), this.setCertIssuerByParam(p.issuersn)));
};

YAHOO.lang.extend(KJUR.asn1.x509.AuthorityKeyIdentifier, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.SubjectKeyIdentifier = function (p) {
    KJUR.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, p);
    var n = KJUR;
    var A = n.asn1;
    var L = A.DEROctetString;
    this.asn1KID = null;

    this.getExtnValueHex = function () {
        return this.asn1ExtnValue = this.asn1KID, this.asn1ExtnValue.getEncodedHex();
    };

    this.setKIDByParam = function (S) {
        if (S.str !== undefined || S.hex !== undefined) this.asn1KID = new L(S);else {
            if (typeof S === "object" && KJUR.crypto.Util.isKey(S) || typeof S === "string" && S.indexOf("BEGIN") != -1) {
                var Y = S;

                if (typeof S === "string") {
                    Y = KEYUTIL.getKey(S);
                }

                var J = KEYUTIL.getKeyID(Y);
                this.asn1KID = new KJUR.asn1.DEROctetString({
                    "hex": J
                });
            }
        }
    };

    this.oid = "2.5.29.14";
    p !== undefined && p.kid !== undefined && this.setKIDByParam(p.kid);
};

YAHOO.lang.extend(KJUR.asn1.x509.SubjectKeyIdentifier, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.AuthorityInfoAccess = function (p) {
    KJUR.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, p);

    this.setAccessDescriptionArray = function (n) {
        var A = new Array();
        var L = KJUR;
        var S = L.asn1;
        var Y = S.DERSequence;

        for (var J = 0; J < n.length; J++) {
            var C = new S.DERObjectIdentifier(n[J].accessMethod);
            var V = new S.x509.GeneralName(n[J].accessLocation);
            var W = new Y({
                "array": [C, V]
            });
            A.push(W);
        }

        this.asn1ExtnValue = new Y({
            "array": A
        });
    };

    this.getExtnValueHex = function () {
        return this.asn1ExtnValue.getEncodedHex();
    };

    this.oid = "1.3.6.1.5.5.7.1.1";
    p !== undefined && p.array !== undefined && this.setAccessDescriptionArray(p.array);
};

YAHOO.lang.extend(KJUR.asn1.x509.AuthorityInfoAccess, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.SubjectAltName = function (p) {
    KJUR.asn1.x509.SubjectAltName.superclass.constructor.call(this, p);

    this.setNameArray = function (n) {
        this.asn1ExtnValue = new KJUR.asn1.x509.GeneralNames(n);
    };

    this.getExtnValueHex = function () {
        return this.asn1ExtnValue.getEncodedHex();
    };

    this.oid = "2.5.29.17";
    p !== undefined && p.array !== undefined && this.setNameArray(p.array);
};

YAHOO.lang.extend(KJUR.asn1.x509.SubjectAltName, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.IssuerAltName = function (p) {
    KJUR.asn1.x509.IssuerAltName.superclass.constructor.call(this, p);

    this.setNameArray = function (n) {
        this.asn1ExtnValue = new KJUR.asn1.x509.GeneralNames(n);
    };

    this.getExtnValueHex = function () {
        return this.asn1ExtnValue.getEncodedHex();
    };

    this.oid = "2.5.29.18";
    p !== undefined && p.array !== undefined && this.setNameArray(p.array);
};

YAHOO.lang.extend(KJUR.asn1.x509.IssuerAltName, KJUR.asn1.x509.Extension);

KJUR.asn1.x509.CRL = function (p) {
    KJUR.asn1.x509.CRL.superclass.constructor.call(this);
    var n = null;
    var A = null;
    var L = null;
    var g = null;
    var S = null;

    this.sign = function () {
        this.asn1SignatureAlg = this.asn1TBSCertList.asn1SignatureAlg;
        sig = new KJUR.crypto.Signature({
            "alg": this.asn1SignatureAlg.nameAlg,
            "prov": "cryptojs/jsrsa"
        });
        sig.init(this.prvKey);
        sig.updateHex(this.asn1TBSCertList.getEncodedHex());
        this.hexSig = sig.sign();
        this.asn1Sig = new KJUR.asn1.DERBitString({
            "hex": "00" + this.hexSig
        });
        var Y = new KJUR.asn1.DERSequence({
            "array": [this.asn1TBSCertList, this.asn1SignatureAlg, this.asn1Sig]
        });
        this.hTLV = Y.getEncodedHex();
        this.isModified = ![];
    };

    this.getEncodedHex = function () {
        if (this.isModified == ![] && this.hTLV != null) return this.hTLV;
        throw "not signed yet";
    };

    this.getPEMString = function () {
        var Y = hextob64nl(this.getEncodedHex());
        return "-----BEGIN X509 CRL-----\r\n" + Y + "\r\n-----END X509 CRL-----\r\n";
    };

    p !== undefined && (p.tbsobj !== undefined && (this.asn1TBSCertList = p.tbsobj), p.prvkeyobj !== undefined && (this.prvKey = p.prvkeyobj));
};

YAHOO.lang.extend(KJUR.asn1.x509.CRL, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.TBSCertList = function (p) {
    KJUR.asn1.x509.TBSCertList.superclass.constructor.call(this);
    var n = null;
    var A = KJUR;
    var L = A.asn1;
    var S = L.DERSequence;
    var Y = L.x509;
    var J = Y.Time;

    this.setSignatureAlgByParam = function (C) {
        this.asn1SignatureAlg = new Y.AlgorithmIdentifier(C);
    };

    this.setIssuerByParam = function (C) {
        this.asn1Issuer = new Y.X500Name(C);
    };

    this.setThisUpdateByParam = function (C) {
        this.asn1ThisUpdate = new J(C);
    };

    this.setNextUpdateByParam = function (C) {
        this.asn1NextUpdate = new J(C);
    };

    this.addRevokedCert = function (C, V) {
        var W = {};

        if (C != undefined && C != null) {
            W.sn = C;
        }

        if (V != undefined && V != null) {
            W.time = V;
        }

        var l = new Y.CRLEntry(W);
        this.aRevokedCert.push(l);
    };

    this.getEncodedHex = function () {
        this.asn1Array = new Array();

        if (this.asn1Version != null) {
            this.asn1Array.push(this.asn1Version);
        }

        this.asn1Array.push(this.asn1SignatureAlg);
        this.asn1Array.push(this.asn1Issuer);
        this.asn1Array.push(this.asn1ThisUpdate);

        if (this.asn1NextUpdate != null) {
            this.asn1Array.push(this.asn1NextUpdate);
        }

        if (this.aRevokedCert.length > 0) {
            var C = new S({
                "array": this.aRevokedCert
            });
            this.asn1Array.push(C);
        }

        var V = new S({
            "array": this.asn1Array
        });
        return this.hTLV = V.getEncodedHex(), this.isModified = ![], this.hTLV;
    };

    this._initialize = function () {
        this.asn1Version = null;
        this.asn1SignatureAlg = null;
        this.asn1Issuer = null;
        this.asn1ThisUpdate = null;
        this.asn1NextUpdate = null;
        this.aRevokedCert = new Array();
    };

    this._initialize();
};

YAHOO.lang.extend(KJUR.asn1.x509.TBSCertList, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.CRLEntry = function (p) {
    KJUR.asn1.x509.CRLEntry.superclass.constructor.call(this);
    var n = null;
    var A = null;
    var L = KJUR;
    var g = L.asn1;

    this.setCertSerial = function (S) {
        this.sn = new g.DERInteger(S);
    };

    this.setRevocationDate = function (S) {
        this.time = new g.x509.Time(S);
    };

    this.getEncodedHex = function () {
        var S = new g.DERSequence({
            "array": [this.sn, this.time]
        });
        return this.TLV = S.getEncodedHex(), this.TLV;
    };

    p !== undefined && (p.time !== undefined && this.setRevocationDate(p.time), p.sn !== undefined && this.setCertSerial(p.sn));
};

YAHOO.lang.extend(KJUR.asn1.x509.CRLEntry, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.X500Name = function (p) {
    KJUR.asn1.x509.X500Name.superclass.constructor.call(this);
    this.asn1Array = new Array();
    var n = KJUR;
    var A = n.asn1;
    var L = A.x509;
    var g = pemtohex;

    this.setByString = function (Y) {
        var J = Y.split("/");
        J.shift();
        var C = [];

        for (var V = 0; V < J.length; V++) {
            if (J[V].match(/^[^=]+=.+$/)) C.push(J[V]);else {
                var W = C.length - 1;
                C[W] = C[W] + "/" + J[V];
            }
        }

        for (var V = 0; V < C.length; V++) {
            this.asn1Array.push(new L.RDN({
                "str": C[V]
            }));
        }
    };

    this.setByLdapString = function (Y) {
        var J = L.X500Name.ldapToCompat(Y);
        this.setByString(J);
    };

    this.setByObject = function (Y) {
        for (var J in Y) {
            if (Y.hasOwnProperty(J)) {
                var C = new KJUR.asn1.x509.RDN({
                    "str": J + "=" + Y[J]
                });

                if (this.asn1Array) {
                    this.asn1Array.push(C);
                } else {
                    this.asn1Array = [C];
                }
            }
        }
    };

    this.getEncodedHex = function () {
        if (typeof this.hTLV == "string") return this.hTLV;
        var Y = new A.DERSequence({
            "array": this.asn1Array
        });
        return this.hTLV = Y.getEncodedHex(), this.hTLV;
    };

    if (p !== undefined) {
        if (p.str !== undefined) this.setByString(p.str);else {
            if (p.ldapstr !== undefined) this.setByLdapString(p.ldapstr);else {
                if (p.hex !== undefined) this.hTLV = p.hex;else {
                    if (p.certissuer !== undefined) {
                        var S = new X509();
                        S.readCertPEM(p.certissuer);
                        this.hTLV = S.getIssuerHex();
                    } else {
                        if (p.certsubject !== undefined) {
                            var S = new X509();
                            S.readCertPEM(p.certsubject);
                            this.hTLV = S.getSubjectHex();
                        } else if (typeof p === "object" && p.certsubject === undefined && p.certissuer === undefined) {
                            this.setByObject(p);
                        }
                    }
                }
            }
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.x509.X500Name, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.X500Name.compatToLDAP = function (p) {
    if (p.substr(0, 1) !== "/") throw "malformed input";
    var n = "";
    p = p.substr(1);
    var a = p.split("/");
    return a.reverse(), a = a.map(function (A) {
        return A.replace(/,/, "\\,");
    }), a.join(",");
};

KJUR.asn1.x509.X500Name.onelineToLDAP = function (p) {
    return KJUR.asn1.x509.X500Name.compatToLDAP(p);
};

KJUR.asn1.x509.X500Name.ldapToCompat = function (p) {
    var n = p.split(",");
    var a = ![];
    var A = [];

    for (var L = 0; n.length > 0; L++) {
        var S = n.shift();

        if (a === !![]) {
            var Y = A.pop();
            var J = (Y + "," + S).replace(/\\,/g, ",");
            A.push(J);
            a = ![];
        } else A.push(S);

        if (S.substr(-1, 1) === "\\") {
            a = !![];
        }
    }

    return A = A.map(function (C) {
        return C.replace("/", "\\/");
    }), A.reverse(), "/" + A.join("/");
};

KJUR.asn1.x509.X500Name.ldapToOneline = function (p) {
    return KJUR.asn1.x509.X500Name.ldapToCompat(p);
};

KJUR.asn1.x509.RDN = function (p) {
    KJUR.asn1.x509.RDN.superclass.constructor.call(this);
    this.asn1Array = new Array();

    this.addByString = function (n) {
        this.asn1Array.push(new KJUR.asn1.x509.AttributeTypeAndValue({
            "str": n
        }));
    };

    this.addByMultiValuedString = function (n) {
        var A = KJUR.asn1.x509.RDN.parseString(n);

        for (var L = 0; L < A.length; L++) {
            this.addByString(A[L]);
        }
    };

    this.getEncodedHex = function () {
        var n = new KJUR.asn1.DERSet({
            "array": this.asn1Array
        });
        return this.TLV = n.getEncodedHex(), this.TLV;
    };

    p !== undefined && p.str !== undefined && this.addByMultiValuedString(p.str);
};

YAHOO.lang.extend(KJUR.asn1.x509.RDN, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.RDN.parseString = function (p) {
    var n = p.split(/\+/);
    var a = ![];
    var A = [];

    for (var L = 0; n.length > 0; L++) {
        var S = n.shift();

        if (a === !![]) {
            var Y = A.pop();
            var J = (Y + "+" + S).replace(/\\\+/g, "+");
            A.push(J);
            a = ![];
        } else A.push(S);

        if (S.substr(-1, 1) === "\\") {
            a = !![];
        }
    }

    var C = ![];
    var V = [];

    for (var L = 0; A.length > 0; L++) {
        var S = A.shift();

        if (C === !![]) {
            var W = V.pop();

            if (S.match(/"$/)) {
                var J = (W + "+" + S).replace(/^([^=]+)="(.*)"$/, "$1=$2");
                V.push(J);
                C = ![];
            } else V.push(W + "+" + S);
        } else V.push(S);

        if (S.match(/^[^=]+="/)) {
            C = !![];
        }
    }

    return V;
};

KJUR.asn1.x509.AttributeTypeAndValue = function (p) {
    KJUR.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);
    var n = null;
    var A = null;
    var L = "utf8";
    var g = KJUR;
    var S = g.asn1;

    this.setByString = function (Y) {
        var J = Y.match(/^([^=]+)=(.+)$/);
        if (J) this.setByAttrTypeAndValueStr(J[1], J[2]);else throw "malformed attrTypeAndValueStr: " + Y;
    };

    this.setByAttrTypeAndValueStr = function (Y, J) {
        this.typeObj = KJUR.asn1.x509.OID.atype2obj(Y);
        var C = L;
        Y == "C" && (C = "prn");
        this.valueObj = this.getValueObj(C, J);
    };

    this.getValueObj = function (Y, J) {
        if (Y == "utf8") return new S.DERUTF8String({
            "str": J
        });
        if (Y == "prn") return new S.DERPrintableString({
            "str": J
        });
        if (Y == "tel") return new S.DERTeletexString({
            "str": J
        });
        if (Y == "ia5") return new S.DERIA5String({
            "str": J
        });
        throw "unsupported directory string type: type=" + Y + " value=" + J;
    };

    this.getEncodedHex = function () {
        var Y = new S.DERSequence({
            "array": [this.typeObj, this.valueObj]
        });
        return this.TLV = Y.getEncodedHex(), this.TLV;
    };

    p !== undefined && p.str !== undefined && this.setByString(p.str);
};

YAHOO.lang.extend(KJUR.asn1.x509.AttributeTypeAndValue, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.SubjectPublicKeyInfo = function (p) {
    KJUR.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
    var A = null;
    var L = null;
    var S = KJUR;
    var Y = S.asn1;
    var J = Y.DERInteger;
    var C = Y.DERBitString;
    var V = Y.DERObjectIdentifier;
    var W = Y.DERSequence;
    var R = Y.ASN1Util.newObject;
    var B = Y.x509;
    var F = B.AlgorithmIdentifier;
    var E = S.crypto;
    var s = E.ECDSA;
    var I = E.DSA;

    this.getASN1Object = function () {
        if (this.asn1AlgId == null || this.asn1SubjPKey == null) throw "algId and/or subjPubKey not set";
        var K = new W({
            "array": [this.asn1AlgId, this.asn1SubjPKey]
        });
        return K;
    };

    this.getEncodedHex = function () {
        var K = this.getASN1Object();
        return this.hTLV = K.getEncodedHex(), this.hTLV;
    };

    this.setPubKey = function (K) {
        try {
            if (K instanceof RSAKey) {
                var T = R({
                    "seq": [{
                        "int": {
                            "bigint": K.n
                        }
                    }, {
                        "int": {
                            "int": K.e
                        }
                    }]
                });
                var Z = T.getEncodedHex();
                this.asn1AlgId = new F({
                    "name": "rsaEncryption"
                });
                this.asn1SubjPKey = new C({
                    "hex": "00" + Z
                });
            }
        } catch (U) {
            console.log(U);
        }

        try {
            if (K instanceof KJUR.crypto.ECDSA) {
                var w = new V({
                    "name": K.curveName
                });
                this.asn1AlgId = new F({
                    "name": "ecPublicKey",
                    "asn1params": w
                });
                this.asn1SubjPKey = new C({
                    "hex": "00" + K.pubKeyHex
                });
            }
        } catch (H) {
            console.log(H);
        }

        try {
            if (K instanceof KJUR.crypto.DSA) {
                var w = new R({
                    "seq": [{
                        "int": {
                            "bigint": K.p
                        }
                    }, {
                        "int": {
                            "bigint": K.q
                        }
                    }, {
                        "int": {
                            "bigint": K.g
                        }
                    }]
                });
                this.asn1AlgId = new F({
                    "name": "dsa",
                    "asn1params": w
                });
                var M = new J({
                    "bigint": K.y
                });
                this.asn1SubjPKey = new C({
                    "hex": "00" + M.getEncodedHex()
                });
            }
        } catch (O) {
            console.log(O);
        }
    };

    p !== undefined && this.setPubKey(p);
};

YAHOO.lang.extend(KJUR.asn1.x509.SubjectPublicKeyInfo, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.Time = function (p) {
    KJUR.asn1.x509.Time.superclass.constructor.call(this);
    var n = null;
    var A = null;
    var L = KJUR;
    var S = L.asn1;
    var Y = S.DERUTCTime;
    var J = S.DERGeneralizedTime;

    this.setTimeParams = function (C) {
        this.timeParams = C;
    };

    this.getEncodedHex = function () {
        var C = null;
        return this.timeParams != null ? this.type == "utc" ? C = new Y(this.timeParams) : C = new J(this.timeParams) : this.type == "utc" ? C = new Y() : C = new J(), this.TLV = C.getEncodedHex(), this.TLV;
    };

    this.type = "utc";
    p !== undefined && (p.type !== undefined ? this.type = p.type : p.str !== undefined && (p.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"), p.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")), this.timeParams = p);
};

YAHOO.lang.extend(KJUR.asn1.x509.Time, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.AlgorithmIdentifier = function (p) {
    KJUR.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this);
    this.nameAlg = null;
    this.asn1Alg = null;
    this.asn1Params = null;
    this.paramEmpty = ![];
    var n = KJUR;
    var A = n.asn1;

    this.getEncodedHex = function () {
        if (this.nameAlg === null && this.asn1Alg === null) throw "algorithm not specified";

        if (this.nameAlg !== null && this.asn1Alg === null) {
            this.asn1Alg = A.x509.OID.name2obj(this.nameAlg);
        }

        var g = [this.asn1Alg];

        if (this.asn1Params !== null) {
            g.push(this.asn1Params);
        }

        var S = new A.DERSequence({
            "array": g
        });
        return this.hTLV = S.getEncodedHex(), this.hTLV;
    };

    if (p !== undefined) {
        p.name !== undefined && (this.nameAlg = p.name);
        p.asn1params !== undefined && (this.asn1Params = p.asn1params);
        p.paramempty !== undefined && (this.paramEmpty = p.paramempty);
    }

    if (this.asn1Params === null && this.paramEmpty === ![] && this.nameAlg !== null) {
        var L = this.nameAlg.toLowerCase();

        if (L.substr(-7, 7) !== "withdsa" && L.substr(-9, 9) !== "withecdsa") {
            this.asn1Params = new A.DERNull();
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.x509.AlgorithmIdentifier, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.GeneralName = function (p) {
    KJUR.asn1.x509.GeneralName.superclass.constructor.call(this);
    var n = null;
    var A = null;
    var L = {
        "rfc822": "81",
        "dns": "82",
        "dn": "a4",
        "uri": "86",
        "ip": "87"
    };
    var S = KJUR;
    var Y = S.asn1;
    var J = Y.DERSequence;
    var C = Y.DEROctetString;
    var V = Y.DERIA5String;
    var W = Y.DERTaggedObject;
    var R = Y.ASN1Object;
    var B = Y.x509.X500Name;
    var F = pemtohex;
    this.explicit = ![];

    this.setByParam = function (E) {
        var I = null;
        var K = null;
        if (E === undefined) return;

        if (E.rfc822 !== undefined) {
            this.type = "rfc822";
            K = new V({
                "str": E[this.type]
            });
        }

        if (E.dns !== undefined) {
            this.type = "dns";
            K = new V({
                "str": E[this.type]
            });
        }

        if (E.uri !== undefined) {
            this.type = "uri";
            K = new V({
                "str": E[this.type]
            });
        }

        if (E.dn !== undefined) {
            this.type = "dn";
            this.explicit = !![];
            typeof E.dn === "string" ? K = new B({
                "str": E.dn
            }) : E.dn instanceof KJUR.asn1.x509.X500Name ? K = E.dn : K = new B(E.dn);
        }

        if (E.ldapdn !== undefined) {
            this.type = "dn";
            this.explicit = !![];
            K = new B({
                "ldapstr": E.ldapdn
            });
        }

        if (E.certissuer !== undefined) {
            this.type = "dn";
            this.explicit = !![];
            var T = E.certissuer;
            var Z = null;

            if (T.match(/^[0-9A-Fa-f]+$/)) {
                Z == T;
            }

            if (T.indexOf("-----BEGIN ") != -1) {
                Z = F(T);
            }

            if (Z == null) throw "certissuer param not cert";
            var M = new X509();
            M.hex = Z;
            var U = M.getIssuerHex();
            K = new R();
            K.hTLV = U;
        }

        if (E.certsubj !== undefined) {
            this.type = "dn";
            this.explicit = !![];
            var T = E.certsubj;
            var Z = null;

            if (T.match(/^[0-9A-Fa-f]+$/)) {
                Z == T;
            }

            if (T.indexOf("-----BEGIN ") != -1) {
                Z = F(T);
            }

            if (Z == null) throw "certsubj param not cert";
            var M = new X509();
            M.hex = Z;
            var U = M.getSubjectHex();
            K = new R();
            K.hTLV = U;
        }

        if (E.ip !== undefined) {
            this.type = "ip";
            this.explicit = ![];
            var H = E.ip;
            var O;
            var X = "malformed IP address";

            if (H.match(/^[0-9.]+[.][0-9.]+$/)) {
                O = intarystrtohex("[" + H.split(".").join(",") + "]");
                if (O.length !== 8) throw X;
            } else {
                if (H.match(/^[0-9A-Fa-f:]+:[0-9A-Fa-f:]+$/)) O = ipv6tohex(H);else {
                    if (H.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) O = H;else throw X;
                }
            }

            K = new C({
                "hex": O
            });
        }

        if (this.type == null) throw "unsupported type in params=" + E;
        this.asn1Obj = new W({
            "explicit": this.explicit,
            "tag": L[this.type],
            "obj": K
        });
    };

    this.getEncodedHex = function () {
        return this.asn1Obj.getEncodedHex();
    };

    p !== undefined && this.setByParam(p);
};

YAHOO.lang.extend(KJUR.asn1.x509.GeneralName, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.GeneralNames = function (p) {
    KJUR.asn1.x509.GeneralNames.superclass.constructor.call(this);
    var n = null;
    var A = KJUR;
    var L = A.asn1;

    this.setByParamArray = function (S) {
        for (var Y = 0; Y < S.length; Y++) {
            var J = new L.x509.GeneralName(S[Y]);
            this.asn1Array.push(J);
        }
    };

    this.getEncodedHex = function () {
        var g = new L.DERSequence({
            "array": this.asn1Array
        });
        return g.getEncodedHex();
    };

    this.asn1Array = new Array();
    typeof p != "undefined" && this.setByParamArray(p);
};

YAHOO.lang.extend(KJUR.asn1.x509.GeneralNames, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.DistributionPointName = function (p) {
    KJUR.asn1.x509.DistributionPointName.superclass.constructor.call(this);
    var n = null;
    var A = null;
    var L = null;
    var S = null;
    var Y = KJUR;
    var J = Y.asn1;
    var C = J.DERTaggedObject;

    this.getEncodedHex = function () {
        if (this.type != "full") throw "currently type shall be 'full': " + this.type;
        return this.asn1Obj = new C({
            "explicit": ![],
            "tag": this.tag,
            "obj": this.asn1V
        }), this.hTLV = this.asn1Obj.getEncodedHex(), this.hTLV;
    };

    if (p !== undefined) {
        if (J.x509.GeneralNames.prototype.isPrototypeOf(p)) {
            this.type = "full";
            this.tag = "a0";
            this.asn1V = p;
        } else throw "This class supports GeneralNames only as argument";
    }
};

YAHOO.lang.extend(KJUR.asn1.x509.DistributionPointName, KJUR.asn1.ASN1Object);

KJUR.asn1.x509.DistributionPoint = function (p) {
    KJUR.asn1.x509.DistributionPoint.superclass.constructor.call(this);
    var n = null;
    var A = KJUR;
    var L = A.asn1;

    this.getEncodedHex = function () {
        var g = new L.DERSequence();

        if (this.asn1DP != null) {
            var S = new L.DERTaggedObject({
                "explicit": !![],
                "tag": "a0",
                "obj": this.asn1DP
            });
            g.appendASN1Object(S);
        }

        return this.hTLV = g.getEncodedHex(), this.hTLV;
    };

    p !== undefined && p.dpobj !== undefined && (this.asn1DP = p.dpobj);
};

YAHOO.lang.extend(KJUR.asn1.x509.DistributionPoint, KJUR.asn1.ASN1Object);
KJUR.asn1.x509.OID = new function (p) {
    this.atype2oidList = {
        "CN": "2.5.4.3",
        "L": "2.5.4.7",
        "ST": "2.5.4.8",
        "O": "2.5.4.10",
        "OU": "2.5.4.11",
        "C": "2.5.4.6",
        "STREET": "2.5.4.9",
        "DC": "0.9.2342.19200300.100.1.25",
        "UID": "0.9.2342.19200300.100.1.1",
        "SN": "2.5.4.4",
        "T": "2.5.4.12",
        "DN": "2.5.4.49",
        "E": "1.2.840.113549.1.9.1",
        "description": "2.5.4.13",
        "businessCategory": "2.5.4.15",
        "postalCode": "2.5.4.17",
        "serialNumber": "2.5.4.5",
        "uniqueIdentifier": "2.5.4.45",
        "organizationIdentifier": "2.5.4.97",
        "jurisdictionOfIncorporationL": "1.3.6.1.4.1.311.60.2.1.1",
        "jurisdictionOfIncorporationSP": "1.3.6.1.4.1.311.60.2.1.2",
        "jurisdictionOfIncorporationC": "1.3.6.1.4.1.311.60.2.1.3"
    };
    this.name2oidList = {
        "sha1": "1.3.14.3.2.26",
        "sha256": "2.16.840.1.101.3.4.2.1",
        "sha384": "2.16.840.1.101.3.4.2.2",
        "sha512": "2.16.840.1.101.3.4.2.3",
        "sha224": "2.16.840.1.101.3.4.2.4",
        "md5": "1.2.840.113549.2.5",
        "md2": "1.3.14.7.2.2.1",
        "ripemd160": "1.3.36.3.2.1",
        "MD2withRSA": "1.2.840.113549.1.1.2",
        "MD4withRSA": "1.2.840.113549.1.1.3",
        "MD5withRSA": "1.2.840.113549.1.1.4",
        "SHA1withRSA": "1.2.840.113549.1.1.5",
        "SHA224withRSA": "1.2.840.113549.1.1.14",
        "SHA256withRSA": "1.2.840.113549.1.1.11",
        "SHA384withRSA": "1.2.840.113549.1.1.12",
        "SHA512withRSA": "1.2.840.113549.1.1.13",
        "SHA1withECDSA": "1.2.840.10045.4.1",
        "SHA224withECDSA": "1.2.840.10045.4.3.1",
        "SHA256withECDSA": "1.2.840.10045.4.3.2",
        "SHA384withECDSA": "1.2.840.10045.4.3.3",
        "SHA512withECDSA": "1.2.840.10045.4.3.4",
        "dsa": "1.2.840.10040.4.1",
        "SHA1withDSA": "1.2.840.10040.4.3",
        "SHA224withDSA": "2.16.840.1.101.3.4.3.1",
        "SHA256withDSA": "2.16.840.1.101.3.4.3.2",
        "rsaEncryption": "1.2.840.113549.1.1.1",
        "commonName": "2.5.4.3",
        "countryName": "2.5.4.6",
        "localityName": "2.5.4.7",
        "stateOrProvinceName": "2.5.4.8",
        "streetAddress": "2.5.4.9",
        "organizationName": "2.5.4.10",
        "organizationalUnitName": "2.5.4.11",
        "domainComponent": "0.9.2342.19200300.100.1.25",
        "userId": "0.9.2342.19200300.100.1.1",
        "surname": "2.5.4.4",
        "title": "2.5.4.12",
        "distinguishedName": "2.5.4.49",
        "emailAddress": "1.2.840.113549.1.9.1",
        "description": "2.5.4.13",
        "businessCategory": "2.5.4.15",
        "postalCode": "2.5.4.17",
        "uniqueIdentifier": "2.5.4.45",
        "organizationIdentifier": "2.5.4.97",
        "jurisdictionOfIncorporationL": "1.3.6.1.4.1.311.60.2.1.1",
        "jurisdictionOfIncorporationSP": "1.3.6.1.4.1.311.60.2.1.2",
        "jurisdictionOfIncorporationC": "1.3.6.1.4.1.311.60.2.1.3",
        "subjectKeyIdentifier": "2.5.29.14",
        "keyUsage": "2.5.29.15",
        "subjectAltName": "2.5.29.17",
        "issuerAltName": "2.5.29.18",
        "basicConstraints": "2.5.29.19",
        "nameConstraints": "2.5.29.30",
        "cRLDistributionPoints": "2.5.29.31",
        "certificatePolicies": "2.5.29.32",
        "authorityKeyIdentifier": "2.5.29.35",
        "policyConstraints": "2.5.29.36",
        "extKeyUsage": "2.5.29.37",
        "authorityInfoAccess": "1.3.6.1.5.5.7.1.1",
        "ocsp": "1.3.6.1.5.5.7.48.1",
        "caIssuers": "1.3.6.1.5.5.7.48.2",
        "anyExtendedKeyUsage": "2.5.29.37.0",
        "serverAuth": "1.3.6.1.5.5.7.3.1",
        "clientAuth": "1.3.6.1.5.5.7.3.2",
        "codeSigning": "1.3.6.1.5.5.7.3.3",
        "emailProtection": "1.3.6.1.5.5.7.3.4",
        "timeStamping": "1.3.6.1.5.5.7.3.8",
        "ocspSigning": "1.3.6.1.5.5.7.3.9",
        "ecPublicKey": "1.2.840.10045.2.1",
        "secp256r1": "1.2.840.10045.3.1.7",
        "secp256k1": "1.3.132.0.10",
        "secp384r1": "1.3.132.0.34",
        "pkcs5PBES2": "1.2.840.113549.1.5.13",
        "pkcs5PBKDF2": "1.2.840.113549.1.5.12",
        "des-EDE3-CBC": "1.2.840.113549.3.7",
        "data": "1.2.840.113549.1.7.1",
        "signed-data": "1.2.840.113549.1.7.2",
        "enveloped-data": "1.2.840.113549.1.7.3",
        "digested-data": "1.2.840.113549.1.7.5",
        "encrypted-data": "1.2.840.113549.1.7.6",
        "authenticated-data": "1.2.840.113549.1.9.16.1.2",
        "tstinfo": "1.2.840.113549.1.9.16.1.4",
        "extensionRequest": "1.2.840.113549.1.9.14"
    };
    this.objCache = {};

    this.name2obj = function (n) {
        if (typeof this.objCache[n] != "undefined") return this.objCache[n];
        if (typeof this.name2oidList[n] == "undefined") throw "Name of ObjectIdentifier not defined: " + n;
        var A = this.name2oidList[n];
        var L = new KJUR.asn1.DERObjectIdentifier({
            "oid": A
        });
        return this.objCache[n] = L, L;
    };

    this.atype2obj = function (n) {
        if (typeof this.objCache[n] != "undefined") return this.objCache[n];
        if (typeof this.atype2oidList[n] == "undefined") throw "AttributeType name undefined: " + n;
        var A = this.atype2oidList[n];
        var L = new KJUR.asn1.DERObjectIdentifier({
            "oid": A
        });
        return this.objCache[n] = L, L;
    };
}();

KJUR.asn1.x509.OID.oid2name = function (p) {
    var n = KJUR.asn1.x509.OID.name2oidList;

    for (var A in n) {
        if (n[A] == p) return A;
    }

    return "";
};

KJUR.asn1.x509.OID.oid2atype = function (p) {
    var n = KJUR.asn1.x509.OID.atype2oidList;

    for (var A in n) {
        if (n[A] == p) return A;
    }

    return p;
};

KJUR.asn1.x509.OID.name2oid = function (p) {
    var n = KJUR.asn1.x509.OID.name2oidList;
    if (n[p] === undefined) return "";
    return n[p];
};

KJUR.asn1.x509.X509Util = {};

KJUR.asn1.x509.X509Util.newCertPEM = function (p) {
    var n = KJUR.asn1.x509;
    var A = n.TBSCertificate;
    var L = n.Certificate;
    var S = new A();
    if (p.serial !== undefined) S.setSerialNumberByParam(p.serial);else throw "serial number undefined.";
    if (typeof p.sigalg.name === "string") S.setSignatureAlgByParam(p.sigalg);else throw "unproper signature algorithm name";
    if (p.issuer !== undefined) S.setIssuerByParam(p.issuer);else throw "issuer name undefined.";
    if (p.notbefore !== undefined) S.setNotBeforeByParam(p.notbefore);else throw "notbefore undefined.";
    if (p.notafter !== undefined) S.setNotAfterByParam(p.notafter);else throw "notafter undefined.";
    if (p.subject !== undefined) S.setSubjectByParam(p.subject);else throw "subject name undefined.";
    if (p.sbjpubkey !== undefined) S.setSubjectPublicKeyByGetKey(p.sbjpubkey);else throw "subject public key undefined.";
    if (p.ext !== undefined && p.ext.length !== undefined) for (var Y = 0; Y < p.ext.length; Y++) {
        for (key in p.ext[Y]) {
            S.appendExtensionByName(key, p.ext[Y][key]);
        }
    }
    if (p.cakey === undefined && p.sighex === undefined) throw "param cakey and sighex undefined.";
    var J = null;
    var C = null;
    return p.cakey && (p.cakey.isPrivate === !![] ? J = p.cakey : J = KEYUTIL.getKey.apply(null, p.cakey), C = new L({
        "tbscertobj": S,
        "prvkeyobj": J
    }), C.sign()), p.sighex && (C = new L({
        "tbscertobj": S
    }), C.setSignatureHex(p.sighex)), C.getPEMString();
};

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) {
    KJUR.asn1 = {};
}

if (typeof KJUR.asn1.cms == "undefined" || !KJUR.asn1.cms) {
    KJUR.asn1.cms = {};
}

KJUR.asn1.cms.Attribute = function (p) {
    var n = [];
    var A = KJUR;
    var L = A.asn1;
    L.cms.Attribute.superclass.constructor.call(this);

    this.getEncodedHex = function () {
        var S;
        var Y;
        var J;
        S = new L.DERObjectIdentifier({
            "oid": this.attrTypeOid
        });
        Y = new L.DERSet({
            "array": this.valueList
        });

        try {
            Y.getEncodedHex();
        } catch (C) {
            console.log(C);
            throw "fail valueSet.getEncodedHex in Attribute(1)/" + C;
        }

        J = new L.DERSequence({
            "array": [S, Y]
        });

        try {
            this.hTLV = J.getEncodedHex();
        } catch (V) {
            console.log(V);
            throw "failed seq.getEncodedHex in Attribute(2)/" + V;
        }

        return this.hTLV;
    };
};

YAHOO.lang.extend(KJUR.asn1.cms.Attribute, KJUR.asn1.ASN1Object);

KJUR.asn1.cms.ContentType = function (p) {
    var n = KJUR;
    var A = n.asn1;
    A.cms.ContentType.superclass.constructor.call(this);
    this.attrTypeOid = "1.2.840.113549.1.9.3";
    var L = null;

    if (typeof p != "undefined") {
        var L = new A.DERObjectIdentifier(p);
        this.valueList = [L];
    }
};

YAHOO.lang.extend(KJUR.asn1.cms.ContentType, KJUR.asn1.cms.Attribute);

KJUR.asn1.cms.MessageDigest = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DEROctetString;
    var S = A.cms;
    S.MessageDigest.superclass.constructor.call(this);
    this.attrTypeOid = "1.2.840.113549.1.9.4";

    if (p !== undefined) {
        if (p.eciObj instanceof S.EncapsulatedContentInfo && typeof p.hashAlg === "string") {
            var Y = p.eciObj.eContentValueHex;
            var J = p.hashAlg;
            var C = n.crypto.Util.hashHex(Y, J);
            var V = new L({
                "hex": C
            });
            V.getEncodedHex();
            this.valueList = [V];
        } else {
            var V = new L(p);
            V.getEncodedHex();
            this.valueList = [V];
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.cms.MessageDigest, KJUR.asn1.cms.Attribute);

KJUR.asn1.cms.SigningTime = function (p) {
    var n = KJUR;
    var A = n.asn1;
    A.cms.SigningTime.superclass.constructor.call(this);
    this.attrTypeOid = "1.2.840.113549.1.9.5";

    if (p !== undefined) {
        var L = new A.x509.Time(p);

        try {
            L.getEncodedHex();
        } catch (g) {
            console.log(g);
            throw "SigningTime.getEncodedHex() failed/" + g;
        }

        this.valueList = [L];
    }
};

YAHOO.lang.extend(KJUR.asn1.cms.SigningTime, KJUR.asn1.cms.Attribute);

KJUR.asn1.cms.SigningCertificate = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var g = A.cms;
    var S = n.crypto;
    g.SigningCertificate.superclass.constructor.call(this);
    this.attrTypeOid = "1.2.840.113549.1.9.16.2.12";

    this.setCerts = function (Y) {
        var J = [];

        for (var C = 0; C < Y.length; C++) {
            var V = pemtohex(Y[C]);
            var W = n.crypto.Util.hashHex(V, "sha1");
            var R = new A.DEROctetString({
                "hex": W
            });
            R.getEncodedHex();
            var B = new g.IssuerAndSerialNumber({
                "cert": Y[C]
            });
            B.getEncodedHex();
            var F = new L({
                "array": [R, B]
            });
            F.getEncodedHex();
            J.push(F);
        }

        var E = new L({
            "array": J
        });
        E.getEncodedHex();
        this.valueList = [E];
    };

    p !== undefined && typeof p.array == "object" && this.setCerts(p.array);
};

YAHOO.lang.extend(KJUR.asn1.cms.SigningCertificate, KJUR.asn1.cms.Attribute);

KJUR.asn1.cms.SigningCertificateV2 = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var S = A.x509;
    var Y = A.cms;
    var J = n.crypto;
    Y.SigningCertificateV2.superclass.constructor.call(this);
    this.attrTypeOid = "1.2.840.113549.1.9.16.2.47";

    this.setCerts = function (V, W) {
        var R = [];

        for (var B = 0; B < V.length; B++) {
            var F = pemtohex(V[B]);
            var E = [];

            if (W !== "sha256") {
                E.push(new S.AlgorithmIdentifier({
                    "name": W
                }));
            }

            var I = J.Util.hashHex(F, W);
            var K = new A.DEROctetString({
                "hex": I
            });
            K.getEncodedHex();
            E.push(K);
            var T = new Y.IssuerAndSerialNumber({
                "cert": V[B]
            });
            T.getEncodedHex();
            E.push(T);
            var i = new L({
                "array": E
            });
            i.getEncodedHex();
            R.push(i);
        }

        var Z = new L({
            "array": R
        });
        Z.getEncodedHex();
        this.valueList = [Z];
    };

    if (p !== undefined) {
        if (typeof p.array == "object") {
            var C = "sha256";
            typeof p.hashAlg == "string" && (C = p.hashAlg);
            this.setCerts(p.array, C);
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.cms.SigningCertificateV2, KJUR.asn1.cms.Attribute);

KJUR.asn1.cms.IssuerAndSerialNumber = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERInteger;
    var S = A.cms;
    var Y = A.x509;
    var J = Y.X500Name;
    var C = X509;
    S.IssuerAndSerialNumber.superclass.constructor.call(this);
    var V = null;
    var W = null;

    this.setByCertPEM = function (R) {
        var B = pemtohex(R);
        var F = new C();
        F.hex = B;
        var E = F.getIssuerHex();
        this.dIssuer = new J();
        this.dIssuer.hTLV = E;
        var s = F.getSerialNumberHex();
        this.dSerial = new L({
            "hex": s
        });
    };

    this.getEncodedHex = function () {
        var l = new A.DERSequence({
            "array": [this.dIssuer, this.dSerial]
        });
        return this.hTLV = l.getEncodedHex(), this.hTLV;
    };

    p !== undefined && (typeof p == "string" && p.indexOf("-----BEGIN ") != -1 && this.setByCertPEM(p), p.issuer && p.serial && (p.issuer instanceof J ? this.dIssuer = p.issuer : this.dIssuer = new J(p.issuer), p.serial instanceof L ? this.dSerial = p.serial : this.dSerial = new L(p.serial)), typeof p.cert == "string" && this.setByCertPEM(p.cert));
};

YAHOO.lang.extend(KJUR.asn1.cms.IssuerAndSerialNumber, KJUR.asn1.ASN1Object);

KJUR.asn1.cms.AttributeList = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.cms;
    L.AttributeList.superclass.constructor.call(this);
    this.list = new Array();
    this.sortFlag = !![];

    this.add = function (g) {
        if (g instanceof L.Attribute) {
            this.list.push(g);
        }
    };

    this.length = function () {
        return this.list.length;
    };

    this.clear = function () {
        this.list = new Array();
        this.hTLV = null;
        this.hV = null;
    };

    this.getEncodedHex = function () {
        if (typeof this.hTLV == "string") return this.hTLV;
        var g = new A.DERSet({
            "array": this.list,
            "sortflag": this.sortFlag
        });
        return this.hTLV = g.getEncodedHex(), this.hTLV;
    };

    p !== undefined && typeof p.sortflag != "undefined" && p.sortflag == ![] && (this.sortFlag = ![]);
};

YAHOO.lang.extend(KJUR.asn1.cms.AttributeList, KJUR.asn1.ASN1Object);

KJUR.asn1.cms.SignerInfo = function (p) {
    var A = KJUR;
    var L = A.asn1;
    var S = L.DERTaggedObject;
    var Y = L.cms;
    var J = Y.AttributeList;
    var C = Y.ContentType;
    var V = Y.EncapsulatedContentInfo;
    var W = Y.MessageDigest;
    var R = Y.SignedData;
    var B = L.x509;
    var F = B.AlgorithmIdentifier;
    var E = A.crypto;
    var s = KEYUTIL;
    Y.SignerInfo.superclass.constructor.call(this);
    this.dCMSVersion = new L.DERInteger({
        "int": 1
    });
    this.dSignerIdentifier = null;
    this.dDigestAlgorithm = null;
    this.dSignedAttrs = new J();
    this.dSigAlg = null;
    this.dSig = null;
    this.dUnsignedAttrs = new J();

    this.setSignerIdentifier = function (I) {
        if (typeof I == "string" && I.indexOf("CERTIFICATE") != -1 && I.indexOf("BEGIN") != -1 && I.indexOf("END") != -1) {
            var K = I;
            this.dSignerIdentifier = new Y.IssuerAndSerialNumber({
                "cert": I
            });
        }
    };

    this.setForContentAndHash = function (I) {
        if (I !== undefined) {
            I.eciObj instanceof V && (this.dSignedAttrs.add(new C({
                "oid": "1.2.840.113549.1.7.1"
            })), this.dSignedAttrs.add(new W({
                "eciObj": I.eciObj,
                "hashAlg": I.hashAlg
            })));
            I.sdObj !== undefined && I.sdObj instanceof R && I.sdObj.digestAlgNameList.join(":").indexOf(I.hashAlg) == -1 && I.sdObj.digestAlgNameList.push(I.hashAlg);
            typeof I.hashAlg == "string" && (this.dDigestAlgorithm = new F({
                "name": I.hashAlg
            }));
        }
    };

    this.sign = function (I, K) {
        this.dSigAlg = new F({
            "name": K
        });
        var T = this.dSignedAttrs.getEncodedHex();
        var Z = s.getKey(I);
        var w = new E.Signature({
            "alg": K
        });
        w.init(Z);
        w.updateHex(T);
        var M = w.sign();
        this.dSig = new L.DEROctetString({
            "hex": M
        });
    };

    this.addUnsigned = function (I) {
        this.hTLV = null;
        this.dUnsignedAttrs.hTLV = null;
        this.dUnsignedAttrs.add(I);
    };

    this.getEncodedHex = function () {
        if (this.dSignedAttrs instanceof J && this.dSignedAttrs.length() == 0) throw "SignedAttrs length = 0 (empty)";
        var I = new S({
            "obj": this.dSignedAttrs,
            "tag": "a0",
            "explicit": ![]
        });
        var K = null;

        if (this.dUnsignedAttrs.length() > 0) {
            K = new S({
                "obj": this.dUnsignedAttrs,
                "tag": "a1",
                "explicit": ![]
            });
        }

        var T = [this.dCMSVersion, this.dSignerIdentifier, this.dDigestAlgorithm, I, this.dSigAlg, this.dSig];

        if (K != null) {
            T.push(K);
        }

        var Z = new L.DERSequence({
            "array": T
        });
        return this.hTLV = Z.getEncodedHex(), this.hTLV;
    };
};

YAHOO.lang.extend(KJUR.asn1.cms.SignerInfo, KJUR.asn1.ASN1Object);

KJUR.asn1.cms.EncapsulatedContentInfo = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERTaggedObject;
    var S = A.DERSequence;
    var Y = A.DERObjectIdentifier;
    var J = A.DEROctetString;
    var C = A.cms;
    C.EncapsulatedContentInfo.superclass.constructor.call(this);
    this.dEContentType = new Y({
        "name": "data"
    });
    this.dEContent = null;
    this.isDetached = ![];
    this.eContentValueHex = null;

    this.setContentType = function (V) {
        if (V.match(/^[0-2][.][0-9.]+$/)) {
            this.dEContentType = new Y({
                "oid": V
            });
        } else {
            this.dEContentType = new Y({
                "name": V
            });
        }
    };

    this.setContentValue = function (V) {
        if (V !== undefined) {
            typeof V.hex == "string" ? this.eContentValueHex = V.hex : typeof V.str == "string" && (this.eContentValueHex = utf8tohex(V.str));
        }
    };

    this.setContentValueHex = function (V) {
        this.eContentValueHex = V;
    };

    this.setContentValueStr = function (V) {
        this.eContentValueHex = utf8tohex(V);
    };

    this.getEncodedHex = function () {
        if (typeof this.eContentValueHex != "string") throw "eContentValue not yet set";
        var V = new J({
            "hex": this.eContentValueHex
        });
        this.dEContent = new L({
            "obj": V,
            "tag": "a0",
            "explicit": !![]
        });
        var W = [this.dEContentType];

        if (!this.isDetached) {
            W.push(this.dEContent);
        }

        var l = new S({
            "array": W
        });
        return this.hTLV = l.getEncodedHex(), this.hTLV;
    };
};

YAHOO.lang.extend(KJUR.asn1.cms.EncapsulatedContentInfo, KJUR.asn1.ASN1Object);

KJUR.asn1.cms.ContentInfo = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERTaggedObject;
    var g = A.DERSequence;
    var S = A.x509;
    KJUR.asn1.cms.ContentInfo.superclass.constructor.call(this);
    this.dContentType = null;
    this.dContent = null;

    this.setContentType = function (Y) {
        if (typeof Y == "string") {
            this.dContentType = S.OID.name2obj(Y);
        }
    };

    this.getEncodedHex = function () {
        var Y = new L({
            "obj": this.dContent,
            "tag": "a0",
            "explicit": !![]
        });
        var J = new g({
            "array": [this.dContentType, Y]
        });
        return this.hTLV = J.getEncodedHex(), this.hTLV;
    };

    p !== undefined && (p.type && this.setContentType(p.type), p.obj && p.obj instanceof A.ASN1Object && (this.dContent = p.obj));
};

YAHOO.lang.extend(KJUR.asn1.cms.ContentInfo, KJUR.asn1.ASN1Object);

KJUR.asn1.cms.SignedData = function (p) {
    var A = KJUR;
    var L = A.asn1;
    var S = L.ASN1Object;
    var Y = L.DERInteger;
    var J = L.DERSet;
    var C = L.DERSequence;
    var V = L.DERTaggedObject;
    var W = L.cms;
    var R = W.EncapsulatedContentInfo;
    var B = W.SignerInfo;
    var F = W.ContentInfo;
    var E = L.x509;
    var s = E.AlgorithmIdentifier;
    KJUR.asn1.cms.SignedData.superclass.constructor.call(this);
    this.dCMSVersion = new Y({
        "int": 1
    });
    this.dDigestAlgs = null;
    this.digestAlgNameList = [];
    this.dEncapContentInfo = new R();
    this.dCerts = null;
    this.certificateList = [];
    this.crlList = [];
    this.signerInfoList = [new B()];

    this.addCertificatesByPEM = function (I) {
        var K = pemtohex(I);
        var T = new S();
        T.hTLV = K;
        this.certificateList.push(T);
    };

    this.getEncodedHex = function () {
        if (typeof this.hTLV == "string") return this.hTLV;

        if (this.dDigestAlgs == null) {
            var I = [];

            for (var K = 0; K < this.digestAlgNameList.length; K++) {
                var T = this.digestAlgNameList[K];
                var Z = new s({
                    "name": T
                });
                I.push(Z);
            }

            this.dDigestAlgs = new J({
                "array": I
            });
        }

        var M = [this.dCMSVersion, this.dDigestAlgs, this.dEncapContentInfo];

        if (this.dCerts == null) {
            if (this.certificateList.length > 0) {
                var U = new J({
                    "array": this.certificateList
                });
                this.dCerts = new V({
                    "obj": U,
                    "tag": "a0",
                    "explicit": ![]
                });
            }
        }

        if (this.dCerts != null) {
            M.push(this.dCerts);
        }

        var H = new J({
            "array": this.signerInfoList
        });
        M.push(H);
        var O = new C({
            "array": M
        });
        return this.hTLV = O.getEncodedHex(), this.hTLV;
    };

    this.getContentInfo = function () {
        this.getEncodedHex();
        var I = new F({
            "type": "signed-data",
            "obj": this
        });
        return I;
    };

    this.getContentInfoEncodedHex = function () {
        var I = this.getContentInfo();
        var K = I.getEncodedHex();
        return K;
    };

    this.getPEM = function () {
        return hextopem(this.getContentInfoEncodedHex(), "CMS");
    };
};

YAHOO.lang.extend(KJUR.asn1.cms.SignedData, KJUR.asn1.ASN1Object);
KJUR.asn1.cms.CMSUtil = new function () {}();

KJUR.asn1.cms.CMSUtil.newSignedData = function (A) {
    var L = KJUR;
    var S = L.asn1;
    var Y = S.cms;
    var J = Y.SignerInfo;
    var C = Y.SignedData;
    var V = Y.SigningTime;
    var W = Y.SigningCertificate;
    var R = Y.SigningCertificateV2;
    var B = S.cades;
    var F = B.SignaturePolicyIdentifier;
    var E = new C();
    E.dEncapContentInfo.setContentValue(A.content);

    if (typeof A.detached == "boolean") {
        E.dEncapContentInfo.isDetached = A.detached;
    }

    if (typeof A.certs == "object") for (var s = 0; s < A.certs.length; s++) {
        E.addCertificatesByPEM(A.certs[s]);
    }
    E.signerInfoList = [];

    for (var s = 0; s < A.signerInfos.length; s++) {
        var I = A.signerInfos[s];
        var K = new J();
        K.setSignerIdentifier(I.signerCert);
        K.setForContentAndHash({
            "sdObj": E,
            "eciObj": E.dEncapContentInfo,
            "hashAlg": I.hashAlg
        });

        for (attrName in I.sAttr) {
            var T = I.sAttr[attrName];

            if (attrName == "SigningTime") {
                var i = new V(T);
                K.dSignedAttrs.add(i);
            }

            if (attrName == "SigningCertificate") {
                var i = new W(T);
                K.dSignedAttrs.add(i);
            }

            if (attrName == "SigningCertificateV2") {
                var i = new R(T);
                K.dSignedAttrs.add(i);
            }

            if (attrName == "SignaturePolicyIdentifier") {
                var i = new F(T);
                K.dSignedAttrs.add(i);
            }
        }

        K.sign(I.signerPrvKey, I.sigAlg);
        E.signerInfoList.push(K);
    }

    return E;
};

KJUR.asn1.cms.CMSUtil.verifySignedData = function (L) {
    var S = KJUR;
    var Y = S.asn1;
    var J = Y.cms;
    var V = J.SignerInfo;
    var W = J.SignedData;
    var R = J.SigningTime;
    var F = J.SigningCertificate;
    var I = J.SigningCertificateV2;
    var K = Y.cades;
    var T = K.SignaturePolicyIdentifier;
    var Z = S.lang.String.isHex;
    var M = ASN1HEX;
    var U = M.getVbyList;
    var H = M.getTLVbyList;
    var O = M.getIdxbyList;
    var X = M.getChildIdx;
    var G = M.getTLV;
    var N = M.oidname;
    var Q = S.crypto.Util.hashHex;

    if (L.cms === undefined && !Z(L.cms)) {}

    var P = L.cms;

    var p0 = function (pp, pn) {
        var pc;

        for (var pa = 3; pa < 6; pa++) {
            pc = O(pp, 0, [1, 0, pa]);

            if (pc !== undefined) {
                var pA = pp.substr(pc, 2);
                pA === "a0" && (pn.certsIdx = pc);
                pA === "a1" && (pn.revinfosIdx = pc);
                pA === "31" && (pn.signerinfosIdx = pc);
            }
        }
    };

    var p1 = function (pp, pn) {
        var pc = pn.signerinfosIdx;
        if (pc === undefined) return;
        var pa = X(pp, pc);
        pn.signerInfoIdxList = pa;

        for (var pA = 0; pA < pa.length; pA++) {
            var pL = pa[pA];
            var pg = {
                "idx": pL
            };
            p2(pp, pg);
            pn.signerInfos.push(pg);
        }
    };

    var p2 = function (pp, pn) {
        var pc = pn.idx;
        pn.signerid_issuer1 = H(pp, pc, [1, 0], "30");
        pn.signerid_serial1 = U(pp, pc, [1, 1], "02");
        pn.hashalg = N(U(pp, pc, [2, 0], "06"));
        var pa = O(pp, pc, [3], "a0");
        pn.idxSignedAttrs = pa;
        p3(pp, pn, pa);
        var pA = X(pp, pc);
        var pL = pA.length;
        if (pL < 6) throw "malformed SignerInfo";
        pn.sigalg = N(U(pp, pc, [pL - 2, 0], "06"));
        pn.sigval = U(pp, pc, [pL - 1], "04");
    };

    var p3 = function (pp, pn, pc) {
        var pa = X(pp, pc);
        pn.signedAttrIdxList = pa;

        for (var pA = 0; pA < pa.length; pA++) {
            var pL = pa[pA];
            var pg = U(pp, pL, [0], "06");
            var pS;

            if (pg === "2a864886f70d010905") {
                pS = hextoutf8(U(pp, pL, [1, 0]));
                pn.saSigningTime = pS;
            } else {
                if (pg === "2a864886f70d010904") {
                    pS = U(pp, pL, [1, 0], "04");
                    pn.saMessageDigest = pS;
                }
            }
        }
    };

    var p4 = function (pp, pn) {
        if (U(pp, 0, [0], "06") !== "2a864886f70d010702") return pn;
        pn.cmsType = "signedData";
        pn.econtent = U(pp, 0, [1, 0, 2, 1, 0]);
        p0(pp, pn);
        pn.signerInfos = [];
        p1(pp, pn);
    };

    var p5 = function (pp, pn) {
        var pc = pn.parse.signerInfos;
        var pa = pc.length;
        var pA = !![];

        for (var pL = 0; pL < pa; pL++) {
            var pg = pc[pL];
            p7(pp, pn, pg, pL);
            !pg.isValid && (pA = ![]);
        }

        pn.isValid = pA;
    };

    var p6 = function (pp, pn, pc, pa) {
        var pA = pn.parse.certsIdx;
        var pL;

        if (pn.certs === undefined) {
            pL = [];
            pn.certkeys = [];
            var pg = X(pp, pA);

            for (var pS = 0; pS < pg.length; pS++) {
                var pf = G(pp, pg[pS]);
                var pY = new X509();
                pY.readCertHex(pf);
                pL[pS] = pY;
                pn.certkeys[pS] = pY.getPublicKey();
            }

            pn.certs = pL;
        } else pL = pn.certs;

        pn.cccc = pL.length;
        pn.cccci = pg.length;

        for (var pS = 0; pS < pL.length; pS++) {
            var pJ = pY.getIssuerHex();
            var pb = pY.getSerialNumberHex();

            if (pc.signerid_issuer1 === pJ && pc.signerid_serial1 === pb) {
                pc.certkey_idx = pS;
            }
        }
    };

    var p7 = function (pp, pn, pc, pa) {
        pc.verifyDetail = {};
        var pA = pc.verifyDetail;
        var pL = pn.parse.econtent;
        var pg = pc.hashalg;
        var pS = pc.saMessageDigest;
        pA.validMessageDigest = ![];

        if (Q(pL, pg) === pS) {
            pA.validMessageDigest = !![];
        }

        p6(pp, pn, pc, pa);
        pA.validSignatureValue = ![];
        var pf = pc.sigalg;
        var pY = "31" + G(pp, pc.idxSignedAttrs).substr(2);
        pc.signedattrshex = pY;
        var pJ = pn.certs[pc.certkey_idx].getPublicKey();
        var pb = new KJUR.crypto.Signature({
            "alg": pf
        });
        pb.init(pJ);
        pb.updateHex(pY);
        var pC = pb.verify(pc.sigval);
        pA.validSignatureValue_isValid = pC;
        pC === !![] && (pA.validSignatureValue = !![]);
        pc.isValid = ![];
        pA.validMessageDigest && pA.validSignatureValue && (pc.isValid = !![]);
    };

    var p8 = function () {};

    var p9 = {
        "isValid": ![],
        "parse": {}
    };
    return p4(P, p9.parse), p5(P, p9), p9;
};

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) {
    KJUR.asn1 = {};
}

if (typeof KJUR.asn1.tsp == "undefined" || !KJUR.asn1.tsp) {
    KJUR.asn1.tsp = {};
}

KJUR.asn1.tsp.Accuracy = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERInteger;
    var g = A.DERSequence;
    var S = A.DERTaggedObject;
    A.tsp.Accuracy.superclass.constructor.call(this);
    this.seconds = null;
    this.millis = null;
    this.micros = null;

    this.getEncodedHex = function () {
        var Y = null;
        var J = null;
        var C = null;
        var V = [];

        if (this.seconds != null) {
            Y = new L({
                "int": this.seconds
            });
            V.push(Y);
        }

        if (this.millis != null) {
            var W = new L({
                "int": this.millis
            });
            J = new S({
                "obj": W,
                "tag": "80",
                "explicit": ![]
            });
            V.push(J);
        }

        if (this.micros != null) {
            var R = new L({
                "int": this.micros
            });
            C = new S({
                "obj": R,
                "tag": "81",
                "explicit": ![]
            });
            V.push(C);
        }

        var B = new g({
            "array": V
        });
        return this.hTLV = B.getEncodedHex(), this.hTLV;
    };

    p !== undefined && (typeof p.seconds == "number" && (this.seconds = p.seconds), typeof p.millis == "number" && (this.millis = p.millis), typeof p.micros == "number" && (this.micros = p.micros));
};

YAHOO.lang.extend(KJUR.asn1.tsp.Accuracy, KJUR.asn1.ASN1Object);

KJUR.asn1.tsp.MessageImprint = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var S = A.DEROctetString;
    var Y = A.x509;
    var J = Y.AlgorithmIdentifier;
    A.tsp.MessageImprint.superclass.constructor.call(this);
    this.dHashAlg = null;
    this.dHashValue = null;

    this.getEncodedHex = function () {
        if (typeof this.hTLV == "string") return this.hTLV;
        var C = new L({
            "array": [this.dHashAlg, this.dHashValue]
        });
        return C.getEncodedHex();
    };

    p !== undefined && (typeof p.hashAlg == "string" && (this.dHashAlg = new J({
        "name": p.hashAlg
    })), typeof p.hashValue == "string" && (this.dHashValue = new S({
        "hex": p.hashValue
    })));
};

YAHOO.lang.extend(KJUR.asn1.tsp.MessageImprint, KJUR.asn1.ASN1Object);

KJUR.asn1.tsp.TimeStampReq = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var S = A.DERInteger;
    var Y = A.DERBoolean;
    var J = A.DERObjectIdentifier;
    var C = A.tsp;
    var V = C.MessageImprint;
    C.TimeStampReq.superclass.constructor.call(this);
    this.dVersion = new S({
        "int": 1
    });
    this.dMessageImprint = null;
    this.dPolicy = null;
    this.dNonce = null;
    this.certReq = !![];

    this.setMessageImprint = function (W) {
        if (W instanceof V) {
            this.dMessageImprint = W;
            return;
        }

        if (typeof W == "object") {
            this.dMessageImprint = new V(W);
        }
    };

    this.getEncodedHex = function () {
        if (this.dMessageImprint == null) throw "messageImprint shall be specified";
        var W = [this.dVersion, this.dMessageImprint];

        if (this.dPolicy != null) {
            W.push(this.dPolicy);
        }

        if (this.dNonce != null) {
            W.push(this.dNonce);
        }

        if (this.certReq) {
            W.push(new Y());
        }

        var l = new L({
            "array": W
        });
        return this.hTLV = l.getEncodedHex(), this.hTLV;
    };

    p !== undefined && (typeof p.mi == "object" && this.setMessageImprint(p.mi), typeof p.policy == "object" && (this.dPolicy = new J(p.policy)), typeof p.nonce == "object" && (this.dNonce = new S(p.nonce)), typeof p.certreq == "boolean" && (this.certReq = p.certreq));
};

YAHOO.lang.extend(KJUR.asn1.tsp.TimeStampReq, KJUR.asn1.ASN1Object);

KJUR.asn1.tsp.TSTInfo = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var S = A.DERInteger;
    var Y = A.DERBoolean;
    var J = A.DERGeneralizedTime;
    var C = A.DERObjectIdentifier;
    var V = A.tsp;
    var W = V.MessageImprint;
    var R = V.Accuracy;
    var B = A.x509.X500Name;
    V.TSTInfo.superclass.constructor.call(this);
    this.dVersion = new S({
        "int": 1
    });
    this.dPolicy = null;
    this.dMessageImprint = null;
    this.dSerialNumber = null;
    this.dGenTime = null;
    this.dAccuracy = null;
    this.dOrdering = null;
    this.dNonce = null;
    this.dTsa = null;

    this.getEncodedHex = function () {
        var F = [this.dVersion];
        if (this.dPolicy == null) throw "policy shall be specified.";
        F.push(this.dPolicy);
        if (this.dMessageImprint == null) throw "messageImprint shall be specified.";
        F.push(this.dMessageImprint);
        if (this.dSerialNumber == null) throw "serialNumber shall be specified.";
        F.push(this.dSerialNumber);
        if (this.dGenTime == null) throw "genTime shall be specified.";
        F.push(this.dGenTime);

        if (this.dAccuracy != null) {
            F.push(this.dAccuracy);
        }

        if (this.dOrdering != null) {
            F.push(this.dOrdering);
        }

        if (this.dNonce != null) {
            F.push(this.dNonce);
        }

        if (this.dTsa != null) {
            F.push(this.dTsa);
        }

        var E = new L({
            "array": F
        });
        return this.hTLV = E.getEncodedHex(), this.hTLV;
    };

    if (p !== undefined) {
        if (typeof p.policy == "string") {
            if (!p.policy.match(/^[0-9.]+$/)) throw "policy shall be oid like 0.1.4.134";
            this.dPolicy = new C({
                "oid": p.policy
            });
        }

        p.messageImprint !== undefined && (this.dMessageImprint = new W(p.messageImprint));
        p.serialNumber !== undefined && (this.dSerialNumber = new S(p.serialNumber));
        p.genTime !== undefined && (this.dGenTime = new J(p.genTime));
        p.accuracy !== undefined && (this.dAccuracy = new R(p.accuracy));
        p.ordering !== undefined && p.ordering == !![] && (this.dOrdering = new Y());
        p.nonce !== undefined && (this.dNonce = new S(p.nonce));
        p.tsa !== undefined && (this.dTsa = new B(p.tsa));
    }
};

YAHOO.lang.extend(KJUR.asn1.tsp.TSTInfo, KJUR.asn1.ASN1Object);

KJUR.asn1.tsp.TimeStampResp = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var S = A.ASN1Object;
    var Y = A.tsp;
    var J = Y.PKIStatusInfo;
    Y.TimeStampResp.superclass.constructor.call(this);
    this.dStatus = null;
    this.dTST = null;

    this.getEncodedHex = function () {
        if (this.dStatus == null) throw "status shall be specified";
        var C = [this.dStatus];

        if (this.dTST != null) {
            C.push(this.dTST);
        }

        var V = new L({
            "array": C
        });
        return this.hTLV = V.getEncodedHex(), this.hTLV;
    };

    p !== undefined && (typeof p.status == "object" && (this.dStatus = new J(p.status)), p.tst !== undefined && p.tst instanceof S && (this.dTST = p.tst.getContentInfo()));
};

YAHOO.lang.extend(KJUR.asn1.tsp.TimeStampResp, KJUR.asn1.ASN1Object);

KJUR.asn1.tsp.PKIStatusInfo = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var S = A.tsp;
    var Y = S.PKIStatus;
    var J = S.PKIFreeText;
    var C = S.PKIFailureInfo;
    S.PKIStatusInfo.superclass.constructor.call(this);
    this.dStatus = null;
    this.dStatusString = null;
    this.dFailureInfo = null;

    this.getEncodedHex = function () {
        if (this.dStatus == null) throw "status shall be specified";
        var V = [this.dStatus];

        if (this.dStatusString != null) {
            V.push(this.dStatusString);
        }

        if (this.dFailureInfo != null) {
            V.push(this.dFailureInfo);
        }

        var W = new L({
            "array": V
        });
        return this.hTLV = W.getEncodedHex(), this.hTLV;
    };

    p !== undefined && (typeof p.status == "object" && (this.dStatus = new Y(p.status)), typeof p.statstr == "object" && (this.dStatusString = new J({
        "array": p.statstr
    })), typeof p.failinfo == "object" && (this.dFailureInfo = new C(p.failinfo)));
};

YAHOO.lang.extend(KJUR.asn1.tsp.PKIStatusInfo, KJUR.asn1.ASN1Object);

KJUR.asn1.tsp.PKIStatus = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERInteger;
    var S = A.tsp;
    var Y = S.PKIStatus;
    S.PKIStatus.superclass.constructor.call(this);
    var J = null;

    this.getEncodedHex = function () {
        return this.hTLV = this.dStatus.getEncodedHex(), this.hTLV;
    };

    if (p !== undefined) {
        if (p.name !== undefined) {
            var C = Y.valueList;
            if (C[p.name] === undefined) throw "name undefined: " + p.name;
            this.dStatus = new L({
                "int": C[p.name]
            });
        } else this.dStatus = new L(p);
    }
};

YAHOO.lang.extend(KJUR.asn1.tsp.PKIStatus, KJUR.asn1.ASN1Object);
KJUR.asn1.tsp.PKIStatus.valueList = {
    "granted": 0,
    "grantedWithMods": 1,
    "rejection": 2,
    "waiting": 3,
    "revocationWarning": 4,
    "revocationNotification": 5
};

KJUR.asn1.tsp.PKIFreeText = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var g = A.DERUTF8String;
    var S = A.tsp;
    S.PKIFreeText.superclass.constructor.call(this);
    this.textList = [];

    this.getEncodedHex = function () {
        var Y = [];

        for (var J = 0; J < this.textList.length; J++) {
            Y.push(new g({
                "str": this.textList[J]
            }));
        }

        var C = new L({
            "array": Y
        });
        return this.hTLV = C.getEncodedHex(), this.hTLV;
    };

    p !== undefined && typeof p.array == "object" && (this.textList = p.array);
};

YAHOO.lang.extend(KJUR.asn1.tsp.PKIFreeText, KJUR.asn1.ASN1Object);

KJUR.asn1.tsp.PKIFailureInfo = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERBitString;
    var S = A.tsp;
    var Y = S.PKIFailureInfo;
    Y.superclass.constructor.call(this);
    this.value = null;

    this.getEncodedHex = function () {
        if (this.value == null) throw "value shall be specified";
        var C = new Number(this.value).toString(2);
        var V = new L();
        return V.setByBinaryString(C), this.hTLV = V.getEncodedHex(), this.hTLV;
    };

    if (p !== undefined) {
        if (typeof p.name == "string") {
            var J = Y.valueList;
            if (J[p.name] === undefined) throw "name undefined: " + p.name;
            this.value = J[p.name];
        } else if (typeof p.int == "number") {
            this.value = p.int;
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.tsp.PKIFailureInfo, KJUR.asn1.ASN1Object);
KJUR.asn1.tsp.PKIFailureInfo.valueList = {
    "badAlg": 0,
    "badRequest": 2,
    "badDataFormat": 5,
    "timeNotAvailable": 14,
    "unacceptedPolicy": 15,
    "unacceptedExtension": 16,
    "addInfoNotAvailable": 17,
    "systemFailure": 25
};

KJUR.asn1.tsp.AbstractTSAAdapter = function (p) {
    this.getTSTHex = function (n, A) {
        throw "not implemented yet";
    };
};

KJUR.asn1.tsp.SimpleTSAAdapter = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.tsp;
    var g = n.crypto.Util.hashHex;
    L.SimpleTSAAdapter.superclass.constructor.call(this);
    this.params = null;
    this.serial = 0;

    this.getTSTHex = function (S, Y) {
        var J = g(S, Y);
        this.params.tstInfo.messageImprint = {
            "hashAlg": Y,
            "hashValue": J
        };
        this.params.tstInfo.serialNumber = {
            "int": this.serial++
        };
        var C = Math.floor(Math.random() * 1000000000);
        this.params.tstInfo.nonce = {
            "int": C
        };
        var V = L.TSPUtil.newTimeStampToken(this.params);
        return V.getContentInfoEncodedHex();
    };

    p !== undefined && (this.params = p);
};

YAHOO.lang.extend(KJUR.asn1.tsp.SimpleTSAAdapter, KJUR.asn1.tsp.AbstractTSAAdapter);

KJUR.asn1.tsp.FixedTSAAdapter = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.tsp;
    var g = n.crypto.Util.hashHex;
    L.FixedTSAAdapter.superclass.constructor.call(this);
    this.params = null;

    this.getTSTHex = function (S, Y) {
        var J = g(S, Y);
        this.params.tstInfo.messageImprint = {
            "hashAlg": Y,
            "hashValue": J
        };
        var C = L.TSPUtil.newTimeStampToken(this.params);
        return C.getContentInfoEncodedHex();
    };

    p !== undefined && (this.params = p);
};

YAHOO.lang.extend(KJUR.asn1.tsp.FixedTSAAdapter, KJUR.asn1.tsp.AbstractTSAAdapter);
KJUR.asn1.tsp.TSPUtil = new function () {}();

KJUR.asn1.tsp.TSPUtil.newTimeStampToken = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.cms;
    var S = A.tsp;
    var Y = A.tsp.TSTInfo;
    var J = new L.SignedData();
    var C = new Y(p.tstInfo);
    var V = C.getEncodedHex();
    J.dEncapContentInfo.setContentValue({
        "hex": V
    });
    J.dEncapContentInfo.setContentType("tstinfo");
    if (typeof p.certs == "object") for (var W = 0; W < p.certs.length; W++) {
        J.addCertificatesByPEM(p.certs[W]);
    }
    var R = J.signerInfoList[0];
    R.setSignerIdentifier(p.signerCert);
    R.setForContentAndHash({
        "sdObj": J,
        "eciObj": J.dEncapContentInfo,
        "hashAlg": p.hashAlg
    });
    var B = new L.SigningCertificate({
        "array": [p.signerCert]
    });
    return R.dSignedAttrs.add(B), R.sign(p.signerPrvKey, p.sigAlg), J;
};

KJUR.asn1.tsp.TSPUtil.parseTimeStampReq = function (p) {
    var n = ASN1HEX;
    var A = n.getChildIdx;
    var L = n.getV;
    var S = n.getTLV;
    var Y = {};
    Y.certreq = ![];
    var J = A(p, 0);
    if (J.length < 2) throw "TimeStampReq must have at least 2 items";
    var C = S(p, J[1]);
    Y.mi = KJUR.asn1.tsp.TSPUtil.parseMessageImprint(C);

    for (var V = 2; V < J.length; V++) {
        var W = J[V];
        var R = p.substr(W, 2);

        if (R == "06") {
            var B = L(p, W);
            Y.policy = n.hextooidstr(B);
        }

        R == "02" && (Y.nonce = L(p, W));
        R == "01" && (Y.certreq = !![]);
    }

    return Y;
};

KJUR.asn1.tsp.TSPUtil.parseMessageImprint = function (p) {
    var n = ASN1HEX;
    var A = n.getChildIdx;
    var L = n.getV;
    var S = n.getIdxbyList;
    var Y = {};
    if (p.substr(0, 2) != "30") throw "head of messageImprint hex shall be '30'";
    var J = A(p, 0);
    var C = S(p, 0, [0, 0]);
    var V = L(p, C);
    var W = n.hextooidstr(V);
    var R = KJUR.asn1.x509.OID.oid2name(W);
    if (R == "") throw "hashAlg name undefined: " + W;
    var B = R;
    var F = S(p, 0, [1]);
    return Y.hashAlg = B, Y.hashValue = L(p, F), Y;
};

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) {
    KJUR.asn1 = {};
}

if (typeof KJUR.asn1.cades == "undefined" || !KJUR.asn1.cades) {
    KJUR.asn1.cades = {};
}

KJUR.asn1.cades.SignaturePolicyIdentifier = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERObjectIdentifier;
    var S = A.DERSequence;
    var Y = A.cades;
    var J = Y.OtherHashAlgAndValue;
    Y.SignaturePolicyIdentifier.superclass.constructor.call(this);
    this.attrTypeOid = "1.2.840.113549.1.9.16.2.15";

    if (p !== undefined) {
        if (typeof p.oid == "string" && typeof p.hash == "object") {
            var C = new L({
                "oid": p.oid
            });
            var V = new J(p.hash);
            var W = new S({
                "array": [C, V]
            });
            this.valueList = [W];
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.cades.SignaturePolicyIdentifier, KJUR.asn1.cms.Attribute);

KJUR.asn1.cades.OtherHashAlgAndValue = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var S = A.DEROctetString;
    var Y = A.x509;
    var J = Y.AlgorithmIdentifier;
    var C = A.cades;
    var V = C.OtherHashAlgAndValue;
    V.superclass.constructor.call(this);
    this.dAlg = null;
    this.dHash = null;

    this.getEncodedHex = function () {
        var W = new L({
            "array": [this.dAlg, this.dHash]
        });
        return this.hTLV = W.getEncodedHex(), this.hTLV;
    };

    p !== undefined && typeof p.alg == "string" && typeof p.hash == "string" && (this.dAlg = new J({
        "name": p.alg
    }), this.dHash = new S({
        "hex": p.hash
    }));
};

YAHOO.lang.extend(KJUR.asn1.cades.OtherHashAlgAndValue, KJUR.asn1.ASN1Object);

KJUR.asn1.cades.SignatureTimeStamp = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.ASN1Object;
    var S = A.x509;
    var Y = A.cades;
    Y.SignatureTimeStamp.superclass.constructor.call(this);
    this.attrTypeOid = "1.2.840.113549.1.9.16.2.14";
    this.tstHex = null;

    if (p !== undefined) {
        if (p.res !== undefined) {
            if (typeof p.res == "string" && p.res.match(/^[0-9A-Fa-f]+$/)) {} else {
                if (p.res instanceof L) {} else throw "res param shall be ASN1Object or hex string";
            }
        }

        if (p.tst !== undefined) {
            if (typeof p.tst == "string" && p.tst.match(/^[0-9A-Fa-f]+$/)) {
                var J = new L();
                this.tstHex = p.tst;
                J.hTLV = this.tstHex;
                J.getEncodedHex();
                this.valueList = [J];
            } else {
                if (p.tst instanceof L) {} else throw "tst param shall be ASN1Object or hex string";
            }
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.cades.SignatureTimeStamp, KJUR.asn1.cms.Attribute);

KJUR.asn1.cades.CompleteCertificateRefs = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.cades;
    L.CompleteCertificateRefs.superclass.constructor.call(this);
    this.attrTypeOid = "1.2.840.113549.1.9.16.2.21";

    this.setByArray = function (S) {
        this.valueList = [];

        for (var Y = 0; Y < S.length; Y++) {
            var J = new L.OtherCertID(S[Y]);
            this.valueList.push(J);
        }
    };

    p !== undefined && typeof p == "object" && typeof p.length == "number" && this.setByArray(p);
};

YAHOO.lang.extend(KJUR.asn1.cades.CompleteCertificateRefs, KJUR.asn1.cms.Attribute);

KJUR.asn1.cades.OtherCertID = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.cms;
    var g = A.cades;
    g.OtherCertID.superclass.constructor.call(this);
    this.hasIssuerSerial = !![];
    this.dOtherCertHash = null;
    this.dIssuerSerial = null;

    this.setByCertPEM = function (S) {
        this.dOtherCertHash = new g.OtherHash(S);
        this.hasIssuerSerial && (this.dIssuerSerial = new L.IssuerAndSerialNumber(S));
    };

    this.getEncodedHex = function () {
        if (this.hTLV != null) return this.hTLV;
        if (this.dOtherCertHash == null) throw "otherCertHash not set";
        var S = [this.dOtherCertHash];

        if (this.dIssuerSerial != null) {
            S.push(this.dIssuerSerial);
        }

        var Y = new A.DERSequence({
            "array": S
        });
        return this.hTLV = Y.getEncodedHex(), this.hTLV;
    };

    p !== undefined && (typeof p == "string" && p.indexOf("-----BEGIN ") != -1 && this.setByCertPEM(p), typeof p == "object" && (p.hasis === ![] && (this.hasIssuerSerial = ![]), typeof p.cert == "string" && this.setByCertPEM(p.cert)));
};

YAHOO.lang.extend(KJUR.asn1.cades.OtherCertID, KJUR.asn1.ASN1Object);

KJUR.asn1.cades.OtherHash = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.cms;
    var S = A.cades;
    var Y = S.OtherHashAlgAndValue;
    var J = n.crypto.Util.hashHex;
    S.OtherHash.superclass.constructor.call(this);
    this.alg = "sha256";
    this.dOtherHash = null;

    this.setByCertPEM = function (C) {
        if (C.indexOf("-----BEGIN ") == -1) throw "certPEM not to seem PEM format";
        var V = pemtohex(C);
        var W = J(V, this.alg);
        this.dOtherHash = new Y({
            "alg": this.alg,
            "hash": W
        });
    };

    this.getEncodedHex = function () {
        if (this.dOtherHash == null) throw "OtherHash not set";
        return this.dOtherHash.getEncodedHex();
    };

    if (p !== undefined) {
        if (typeof p == "string") {
            if (p.indexOf("-----BEGIN ") != -1) this.setByCertPEM(p);else {
                if (p.match(/^[0-9A-Fa-f]+$/)) this.dOtherHash = new A.DEROctetString({
                    "hex": p
                });else throw "unsupported string value for params";
            }
        } else if (typeof p == "object") {
            typeof p.cert == "string" ? (typeof p.alg == "string" && (this.alg = p.alg), this.setByCertPEM(p.cert)) : this.dOtherHash = new Y(p);
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.cades.OtherHash, KJUR.asn1.ASN1Object);
KJUR.asn1.cades.CAdESUtil = new function () {}();

KJUR.asn1.cades.CAdESUtil.addSigTS = function (p, n, A) {};

KJUR.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function (L) {
    var S = ASN1HEX;
    var Y = S.getChildIdx;
    var J = S.getTLV;
    var C = S.getTLVbyList;
    var V = S.getIdxbyList;
    var W = KJUR;
    var R = W.asn1;
    var F = R.ASN1Object;
    var E = R.cms;
    var I = E.SignedData;
    var K = R.cades;
    var T = K.CAdESUtil;
    var i = {};
    if (C(L, 0, [0]) != "06092a864886f70d010702") throw "hex is not CMS SignedData";
    var Z = V(L, 0, [1, 0]);
    var M = Y(L, Z);
    if (M.length < 4) throw "num of SignedData elem shall be 4 at least";
    var U = M.shift();
    i.version = J(L, U);
    var H = M.shift();
    i.algs = J(L, H);
    var O = M.shift();
    i.encapcontent = J(L, O);
    i.certs = null;
    i.revs = null;
    i.si = [];
    var X = M.shift();

    if (L.substr(X, 2) == "a0") {
        i.certs = J(L, X);
        X = M.shift();
    }

    if (L.substr(X, 2) == "a1") {
        i.revs = J(L, X);
        X = M.shift();
    }

    var G = X;
    if (L.substr(G, 2) != "31") throw "Can't find signerInfos";
    var N = Y(L, G);

    for (var D = 0; D < N.length; D++) {
        var r = N[D];
        var Q = T.parseSignerInfoForAddingUnsigned(L, r, D);
        i.si[D] = Q;
    }

    var P = null;
    i.obj = new I();
    P = new F();
    P.hTLV = i.version;
    i.obj.dCMSVersion = P;
    P = new F();
    P.hTLV = i.algs;
    i.obj.dDigestAlgs = P;
    P = new F();
    P.hTLV = i.encapcontent;
    i.obj.dEncapContentInfo = P;
    P = new F();
    P.hTLV = i.certs;
    i.obj.dCerts = P;
    i.obj.signerInfoList = [];

    for (var D = 0; D < i.si.length; D++) {
        i.obj.signerInfoList.push(i.si[D].obj);
    }

    return i;
};

KJUR.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function (A, L, S) {
    var Y = ASN1HEX;
    var J = Y.getChildIdx;
    var C = Y.getTLV;
    var V = Y.getV;
    var W = KJUR;
    var R = W.asn1;
    var B = R.ASN1Object;
    var F = R.cms;
    var E = F.AttributeList;
    var I = F.SignerInfo;
    var K = {};
    var T = J(A, L);
    if (T.length != 6) throw "not supported items for SignerInfo (!=6)";
    var Z = T.shift();
    K.version = C(A, Z);
    var M = T.shift();
    K.si = C(A, M);
    var U = T.shift();
    K.digalg = C(A, U);
    var H = T.shift();
    K.sattrs = C(A, H);
    var O = T.shift();
    K.sigalg = C(A, O);
    var X = T.shift();
    K.sig = C(A, X);
    K.sigval = V(A, X);
    var G = null;
    return K.obj = new I(), G = new B(), G.hTLV = K.version, K.obj.dCMSVersion = G, G = new B(), G.hTLV = K.si, K.obj.dSignerIdentifier = G, G = new B(), G.hTLV = K.digalg, K.obj.dDigestAlgorithm = G, G = new B(), G.hTLV = K.sattrs, K.obj.dSignedAttrs = G, G = new B(), G.hTLV = K.sigalg, K.obj.dSigAlg = G, G = new B(), G.hTLV = K.sig, K.obj.dSig = G, K.obj.dUnsignedAttrs = new E(), K;
};

if (typeof KJUR.asn1.csr == "undefined" || !KJUR.asn1.csr) {
    KJUR.asn1.csr = {};
}

KJUR.asn1.csr.CertificationRequest = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERBitString;
    var S = A.DERSequence;
    var Y = A.csr;
    var J = A.x509;
    Y.CertificationRequest.superclass.constructor.call(this);
    var C = null;
    var V = null;
    var W = null;
    var R = null;
    var B = null;

    this.sign = function (F, E) {
        if (this.prvKey == null) {
            this.prvKey = E;
        }

        this.asn1SignatureAlg = new J.AlgorithmIdentifier({
            "name": F
        });
        var s = new n.crypto.Signature({
            "alg": F
        });
        s.init(this.prvKey);
        s.updateHex(this.asn1CSRInfo.getEncodedHex());
        this.hexSig = s.sign();
        this.asn1Sig = new L({
            "hex": "00" + this.hexSig
        });
        var I = new S({
            "array": [this.asn1CSRInfo, this.asn1SignatureAlg, this.asn1Sig]
        });
        this.hTLV = I.getEncodedHex();
        this.isModified = ![];
    };

    this.getPEMString = function () {
        return hextopem(this.getEncodedHex(), "CERTIFICATE REQUEST");
    };

    this.getEncodedHex = function () {
        if (this.isModified == ![] && this.hTLV != null) return this.hTLV;
        throw "not signed yet";
    };

    p !== undefined && p.csrinfo !== undefined && (this.asn1CSRInfo = p.csrinfo);
};

YAHOO.lang.extend(KJUR.asn1.csr.CertificationRequest, KJUR.asn1.ASN1Object);

KJUR.asn1.csr.CertificationRequestInfo = function (p) {
    var A = KJUR;
    var L = A.asn1;
    var S = L.DERInteger;
    var Y = L.DERSequence;
    var J = L.DERSet;
    var C = L.DERNull;
    var V = L.DERTaggedObject;
    var W = L.DERObjectIdentifier;
    var R = L.csr;
    var B = L.x509;
    var F = B.X500Name;
    var E = B.Extension;
    var s = KEYUTIL;
    R.CertificationRequestInfo.superclass.constructor.call(this);

    this._initialize = function () {
        this.asn1Array = new Array();
        this.asn1Version = new S({
            "int": 0
        });
        this.asn1Subject = null;
        this.asn1SubjPKey = null;
        this.extensionsArray = new Array();
    };

    this.setSubjectByParam = function (I) {
        this.asn1Subject = new F(I);
    };

    this.setSubjectPublicKeyByGetKey = function (I) {
        var K = s.getKey(I);
        this.asn1SubjPKey = new B.SubjectPublicKeyInfo(K);
    };

    this.appendExtensionByName = function (I, K) {
        E.appendByNameToArray(I, K, this.extensionsArray);
    };

    this.getEncodedHex = function () {
        this.asn1Array = new Array();
        this.asn1Array.push(this.asn1Version);
        this.asn1Array.push(this.asn1Subject);
        this.asn1Array.push(this.asn1SubjPKey);

        if (this.extensionsArray.length > 0) {
            var I = new Y({
                "array": this.extensionsArray
            });
            var K = new J({
                "array": [I]
            });
            var T = new Y({
                "array": [new W({
                    "oid": "1.2.840.113549.1.9.14"
                }), K]
            });
            var Z = new V({
                "explicit": !![],
                "tag": "a0",
                "obj": T
            });
            this.asn1Array.push(Z);
        } else {
            var Z = new V({
                "explicit": ![],
                "tag": "a0",
                "obj": new C()
            });
            this.asn1Array.push(Z);
        }

        var w = new Y({
            "array": this.asn1Array
        });
        return this.hTLV = w.getEncodedHex(), this.isModified = ![], this.hTLV;
    };

    this._initialize();
};

YAHOO.lang.extend(KJUR.asn1.csr.CertificationRequestInfo, KJUR.asn1.ASN1Object);
KJUR.asn1.csr.CSRUtil = new function () {}();

KJUR.asn1.csr.CSRUtil.newCSRPEM = function (p) {
    var n = KEYUTIL;
    var A = KJUR.asn1.csr;
    if (p.subject === undefined) throw "parameter subject undefined";
    if (p.sbjpubkey === undefined) throw "parameter sbjpubkey undefined";
    if (p.sigalg === undefined) throw "parameter sigalg undefined";
    if (p.sbjprvkey === undefined) throw "parameter sbjpubkey undefined";
    var L = new A.CertificationRequestInfo();
    L.setSubjectByParam(p.subject);
    L.setSubjectPublicKeyByGetKey(p.sbjpubkey);
    if (p.ext !== undefined && p.ext.length !== undefined) for (var S = 0; S < p.ext.length; S++) {
        for (key in p.ext[S]) {
            L.appendExtensionByName(key, p.ext[S][key]);
        }
    }
    var Y = new A.CertificationRequest({
        "csrinfo": L
    });
    var J = n.getKey(p.sbjprvkey);
    Y.sign(p.sigalg, J);
    var C = Y.getPEMString();
    return C;
};

KJUR.asn1.csr.CSRUtil.getInfo = function (p) {
    var n = ASN1HEX;
    var A = n.getTLVbyList;
    var L = {};
    L.subject = {};
    L.pubkey = {};
    if (p.indexOf("-----BEGIN CERTIFICATE REQUEST") == -1) throw "argument is not PEM file";
    var S = pemtohex(p, "CERTIFICATE REQUEST");

    try {
        L.subject.hex = A(S, 0, [0, 1]);
    } catch (J) {
        console.log(J);
    }

    try {
        L.subject.name = X509.hex2dn(L.subject.hex);
    } catch (C) {
        console.log(C);
    }

    L.pubkey.hex = A(S, 0, [0, 2]);
    L.pubkey.obj = KEYUTIL.getKey(L.pubkey.hex, null, "pkcs8pub");

    try {
        L.ext = [];
        var Y = new X509();
        Y.parseExt(p);
        L.ext.push({
            "subjectAltName": {
                "array": Y.getExtSubjectAltName2()
            }
        });
    } catch (V) {
        console.log(V);
    }

    return L;
};

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) {
    KJUR.asn1 = {};
}

if (typeof KJUR.asn1.ocsp == "undefined" || !KJUR.asn1.ocsp) {
    KJUR.asn1.ocsp = {};
}

KJUR.asn1.ocsp.DEFAULT_HASH = "sha1";

KJUR.asn1.ocsp.CertID = function (p) {
    var A = KJUR;
    var L = A.asn1;
    var S = L.DEROctetString;
    var Y = L.DERInteger;
    var J = L.DERSequence;
    var C = L.x509;
    var V = C.AlgorithmIdentifier;
    var W = L.ocsp;
    var R = W.DEFAULT_HASH;
    var B = A.crypto;
    var F = B.Util.hashHex;
    var E = X509;
    var s = ASN1HEX;
    W.CertID.superclass.constructor.call(this);
    this.dHashAlg = null;
    this.dIssuerNameHash = null;
    this.dIssuerKeyHash = null;
    this.dSerialNumber = null;

    this.setByValue = function (T, Z, w, M) {
        M === undefined && (M = R);
        this.dHashAlg = new V({
            "name": M
        });
        this.dIssuerNameHash = new S({
            "hex": T
        });
        this.dIssuerKeyHash = new S({
            "hex": Z
        });
        this.dSerialNumber = new Y({
            "hex": w
        });
    };

    this.setByCert = function (T, Z, M) {
        if (M === undefined) {
            M = R;
        }

        var U = new E();
        U.readCertPEM(Z);
        var H = new E();
        H.readCertPEM(T);
        var O = H.getPublicKeyHex();
        var X = s.getTLVbyList(O, 0, [1, 0], "30");
        var G = U.getSerialNumberHex();
        var N = F(H.getSubjectHex(), M);
        var D = F(X, M);
        this.setByValue(N, D, G, M);
        this.hoge = U.getSerialNumberHex();
    };

    this.getEncodedHex = function () {
        if (this.dHashAlg === null && this.dIssuerNameHash === null && this.dIssuerKeyHash === null && this.dSerialNumber === null) throw "not yet set values";
        var T = [this.dHashAlg, this.dIssuerNameHash, this.dIssuerKeyHash, this.dSerialNumber];
        var Z = new J({
            "array": T
        });
        return this.hTLV = Z.getEncodedHex(), this.hTLV;
    };

    if (p !== undefined) {
        var I = p;

        if (I.issuerCert !== undefined && I.subjectCert !== undefined) {
            var K = R;
            I.alg === undefined && (K = undefined);
            this.setByCert(I.issuerCert, I.subjectCert, K);
        } else {
            if (I.namehash !== undefined && I.keyhash !== undefined && I.serial !== undefined) {
                var K = R;
                I.alg === undefined && (K = undefined);
                this.setByValue(I.namehash, I.keyhash, I.serial, K);
            } else throw "invalid constructor arguments";
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.ocsp.CertID, KJUR.asn1.ASN1Object);

KJUR.asn1.ocsp.Request = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var g = A.ocsp;
    g.Request.superclass.constructor.call(this);
    this.dReqCert = null;
    this.dExt = null;

    this.getEncodedHex = function () {
        var Y = [];
        if (this.dReqCert === null) throw "reqCert not set";
        Y.push(this.dReqCert);
        var J = new L({
            "array": Y
        });
        return this.hTLV = J.getEncodedHex(), this.hTLV;
    };

    if (typeof p !== "undefined") {
        var S = new g.CertID(p);
        this.dReqCert = S;
    }
};

YAHOO.lang.extend(KJUR.asn1.ocsp.Request, KJUR.asn1.ASN1Object);

KJUR.asn1.ocsp.TBSRequest = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var g = A.ocsp;
    g.TBSRequest.superclass.constructor.call(this);
    this.version = 0;
    this.dRequestorName = null;
    this.dRequestList = [];
    this.dRequestExt = null;

    this.setRequestListByParam = function (S) {
        var Y = [];

        for (var J = 0; J < S.length; J++) {
            var C = new g.Request(S[0]);
            Y.push(C);
        }

        this.dRequestList = Y;
    };

    this.getEncodedHex = function () {
        var S = [];
        if (this.version !== 0) throw "not supported version: " + this.version;
        if (this.dRequestorName !== null) throw "requestorName not supported";
        var Y = new L({
            "array": this.dRequestList
        });
        S.push(Y);
        if (this.dRequestExt !== null) throw "requestExtensions not supported";
        var J = new L({
            "array": S
        });
        return this.hTLV = J.getEncodedHex(), this.hTLV;
    };

    p !== undefined && p.reqList !== undefined && this.setRequestListByParam(p.reqList);
};

YAHOO.lang.extend(KJUR.asn1.ocsp.TBSRequest, KJUR.asn1.ASN1Object);

KJUR.asn1.ocsp.OCSPRequest = function (p) {
    var n = KJUR;
    var A = n.asn1;
    var L = A.DERSequence;
    var g = A.ocsp;
    g.OCSPRequest.superclass.constructor.call(this);
    this.dTbsRequest = null;
    this.dOptionalSignature = null;

    this.getEncodedHex = function () {
        var Y = [];
        if (this.dTbsRequest !== null) Y.push(this.dTbsRequest);else throw "tbsRequest not set";
        if (this.dOptionalSignature !== null) throw "optionalSignature not supported";
        var J = new L({
            "array": Y
        });
        return this.hTLV = J.getEncodedHex(), this.hTLV;
    };

    if (p !== undefined) {
        if (p.reqList !== undefined) {
            var S = new g.TBSRequest(p);
            this.dTbsRequest = S;
        }
    }
};

YAHOO.lang.extend(KJUR.asn1.ocsp.OCSPRequest, KJUR.asn1.ASN1Object);
KJUR.asn1.ocsp.OCSPUtil = {};

KJUR.asn1.ocsp.OCSPUtil.getRequestHex = function (p, n, A) {
    var L = KJUR;
    var S = L.asn1;
    var Y = S.ocsp;

    if (A === undefined) {
        A = Y.DEFAULT_HASH;
    }

    var J = {
        "alg": A,
        "issuerCert": p,
        "subjectCert": n
    };
    var C = new Y.OCSPRequest({
        "reqList": [J]
    });
    return C.getEncodedHex();
};

KJUR.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function (p) {
    var n = ASN1HEX;
    var A = n.getVbyList;
    var L = n.getIdxbyList;
    var A = n.getVbyList;
    var S = n.getV;
    var Y = {};

    try {
        var J = A(p, 0, [0], "0a");
        Y.responseStatus = parseInt(J, 16);
    } catch (R) {
        console.log(R);
    }

    if (Y.responseStatus !== 0) return Y;

    try {
        var C = L(p, 0, [1, 0, 1, 0, 0, 2, 0, 1]);

        if (p.substr(C, 2) === "80") {
            Y.certStatus = "good";
        } else {
            if (p.substr(C, 2) === "a1") {
                Y.certStatus = "revoked";
                Y.revocationTime = hextoutf8(A(p, C, [0]));
            } else {
                if (p.substr(C, 2) === "82") {
                    Y.certStatus = "unknown";
                }
            }
        }
    } catch (B) {
        console.log(B);
    }

    try {
        var V = L(p, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
        Y.thisUpdate = hextoutf8(S(p, V));
    } catch (F) {
        console.log(F);
    }

    try {
        var W = L(p, 0, [1, 0, 1, 0, 0, 2, 0, 3]);

        if (p.substr(W, 2) === "a0") {
            Y.nextUpdate = hextoutf8(A(p, W, [0]));
        }
    } catch (E) {
        console.log(E);
    }

    return Y;
};

var KJUR;

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.lang == "undefined" || !KJUR.lang) {
    KJUR.lang = {};
}

KJUR.lang.String = function () {};

function Base64x() {}

function stoBA(p) {
    var n = new Array();

    for (var a = 0; a < p.length; a++) {
        n[a] = p.charCodeAt(a);
    }

    return n;
}

function BAtos(p) {
    var n = "";

    for (var a = 0; a < p.length; a++) {
        n = n + String.fromCharCode(p[a]);
    }

    return n;
}

function BAtohex(p) {
    var n = "";

    for (var a = 0; a < p.length; a++) {
        var A = p[a].toString(16);
        A.length == 1 && (A = "0" + A);
        n = n + A;
    }

    return n;
}

function stohex(p) {
    return BAtohex(stoBA(p));
}

function stob64(p) {
    return hex2b64(stohex(p));
}

function stob64u(p) {
    return b64tob64u(hex2b64(stohex(p)));
}

function b64utos(p) {
    return BAtos(b64toBA(b64utob64(p)));
}

function b64tob64u(p) {
    return p = p.replace(/\=/g, ""), p = p.replace(/\+/g, "-"), p = p.replace(/\//g, "_"), p;
}

function b64utob64(p) {
    return p.length % 4 == 2 ? p = p + "==" : p.length % 4 == 3 && (p = p + "="), p = p.replace(/-/g, "+"), p = p.replace(/_/g, "/"), p;
}

function hextob64u(p) {
    return p.length % 2 == 1 && (p = "0" + p), b64tob64u(hex2b64(p));
}

function b64utohex(p) {
    return b64tohex(b64utob64(p));
}

var utf8tob64u;
var b64utoutf8;

if (typeof Buffer === "function") {
    utf8tob64u = function (p) {
        return b64tob64u(new Buffer(p, "utf8").toString("base64"));
    };

    b64utoutf8 = function (p) {
        return new Buffer(b64utob64(p), "base64").toString("utf8");
    };
} else {
    utf8tob64u = function (p) {
        return hextob64u(uricmptohex(encodeURIComponentAll(p)));
    };

    b64utoutf8 = function (p) {
        return decodeURIComponent(hextouricmp(b64utohex(p)));
    };
}

function utf8tob64(p) {
    return hex2b64(uricmptohex(encodeURIComponentAll(p)));
}

function b64toutf8(p) {
    return decodeURIComponent(hextouricmp(b64tohex(p)));
}

function utf8tohex(p) {
    return uricmptohex(encodeURIComponentAll(p));
}

function hextoutf8(p) {
    return decodeURIComponent(hextouricmp(p));
}

function hextorstr(p) {
    var n = "";

    for (var A = 0; A < p.length - 1; A += 2) {
        n += String.fromCharCode(parseInt(p.substr(A, 2), 16));
    }

    return n;
}

function rstrtohex(p) {
    var n = "";

    for (var A = 0; A < p.length; A++) {
        n += ("0" + p.charCodeAt(A).toString(16)).slice(-2);
    }

    return n;
}

function hextob64(p) {
    return hex2b64(p);
}

function hextob64nl(p) {
    var n = hextob64(p);
    var A = n.replace(/(.{64})/g, "$1\r\n");
    return A = A.replace(/\r\n$/, ""), A;
}

function b64nltohex(p) {
    var n = p.replace(/[^0-9A-Za-z\/+=]*/g, "");
    var A = b64tohex(n);
    return A;
}

function hextopem(p, n) {
    var A = hextob64nl(p);
    return "-----BEGIN " + n + "-----\r\n" + A + "\r\n-----END " + n + "-----\r\n";
}

function pemtohex(p, n) {
    if (p.indexOf("-----BEGIN ") == -1) throw "can't find PEM header: " + n;
    return n !== undefined ? (p = p.replace(new RegExp("^[^]*-----BEGIN " + n + "-----"), ""), p = p.replace(new RegExp("-----END " + n + "-----[^]*$"), "")) : (p = p.replace(/^[^]*-----BEGIN [^-]+-----/, ""), p = p.replace(/-----END [^-]+-----[^]*$/, "")), b64nltohex(p);
}

function hextoArrayBuffer(p) {
    if (p.length % 2 != 0) throw "input is not even length";
    if (p.match(/^[0-9A-Fa-f]+$/) == null) throw "input is not hexadecimal";
    var n = new ArrayBuffer(p.length / 2);
    var A = new DataView(n);

    for (var L = 0; L < p.length / 2; L++) {
        A.setUint8(L, parseInt(p.substr(L * 2, 2), 16));
    }

    return n;
}

function ArrayBuffertohex(p) {
    var n = "";
    var A = new DataView(p);

    for (var L = 0; L < p.byteLength; L++) {
        n += ("00" + A.getUint8(L).toString(16)).slice(-2);
    }

    return n;
}

function zulutomsec(p) {
    var A;
    var L;
    var S;
    var Y;
    var J;
    var C;
    var V;
    var W;
    var R;
    var B;
    var F;
    var E;
    E = p.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/);
    if (E) return R = E[1], A = parseInt(R), R.length === 2 && (50 <= A && A < 100 ? A = 1900 + A : 0 <= A && A < 50 && (A = 2000 + A)), L = parseInt(E[2]) - 1, S = parseInt(E[3]), Y = parseInt(E[4]), J = parseInt(E[5]), C = parseInt(E[6]), V = 0, B = E[7], B !== "" && (F = (B.substr(1) + "00").substr(0, 3), V = parseInt(F)), Date.UTC(A, L, S, Y, J, C, V);
    throw "unsupported zulu format: " + p;
}

function zulutosec(p) {
    var n = zulutomsec(p);
    return ~~(n / 1000);
}

function zulutodate(p) {
    return new Date(zulutomsec(p));
}

function datetozulu(p, n, A) {
    var L;
    var S = p.getUTCFullYear();

    if (n) {
        if (S < 1950 || 2049 < S) throw "not proper year for UTCTime: " + S;
        L = ("" + S).slice(-2);
    } else L = ("000" + S).slice(-4);

    L += ("0" + (p.getUTCMonth() + 1)).slice(-2);
    L += ("0" + p.getUTCDate()).slice(-2);
    L += ("0" + p.getUTCHours()).slice(-2);
    L += ("0" + p.getUTCMinutes()).slice(-2);
    L += ("0" + p.getUTCSeconds()).slice(-2);

    if (A) {
        var Y = p.getUTCMilliseconds();

        if (Y !== 0) {
            Y = ("00" + Y).slice(-3);
            Y = Y.replace(/0+$/g, "");
            L += "." + Y;
        }
    }

    return L += "Z", L;
}

function uricmptohex(p) {
    return p.replace(/%/g, "");
}

function hextouricmp(p) {
    return p.replace(/(..)/g, "%$1");
}

function ipv6tohex(p) {
    var n = "malformed IPv6 address";
    if (!p.match(/^[0-9A-Fa-f:]+$/)) throw n;
    p = p.toLowerCase();
    var a = p.split(":").length - 1;
    if (a < 2) throw n;
    var A = ":".repeat(7 - a + 2);
    p = p.replace("::", A);
    var L = p.split(":");
    if (L.length != 8) throw n;

    for (var S = 0; S < 8; S++) {
        L[S] = ("0000" + L[S]).slice(-4);
    }

    return L.join("");
}

function hextoipv6(p) {
    if (!p.match(/^[0-9A-Fa-f]{32}$/)) throw "malformed IPv6 address octet";
    p = p.toLowerCase();
    var n = p.match(/.{1,4}/g);

    for (var a = 0; a < 8; a++) {
        n[a] = n[a].replace(/^0+/, "");
        n[a] == "" && (n[a] = "0");
    }

    p = ":" + n.join(":") + ":";
    var A = p.match(/:(0:){2,}/g);
    if (A === null) return p.slice(1, -1);
    var L = "";

    for (var a = 0; a < A.length; a++) {
        if (A[a].length > L.length) {
            L = A[a];
        }
    }

    return p = p.replace(L, "::"), p.slice(1, -1);
}

function hextoip(p) {
    var n = "malformed hex value";
    if (!p.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw n;

    if (p.length == 8) {
        var A;

        try {
            return A = parseInt(p.substr(0, 2), 16) + "." + parseInt(p.substr(2, 2), 16) + "." + parseInt(p.substr(4, 2), 16) + "." + parseInt(p.substr(6, 2), 16), A;
        } catch (L) {
            console.log(L);
            throw n;
        }
    } else return p.length == 32 ? hextoipv6(p) : p;
}

function iptohex(p) {
    var n = "malformed IP address";
    p = p.toLowerCase(p);

    if (p.match(/^[0-9.]+$/)) {
        var a = p.split(".");
        if (a.length !== 4) throw n;
        var A = "";

        try {
            for (var L = 0; L < 4; L++) {
                var S = parseInt(a[L]);
                A += ("0" + S.toString(16)).slice(-2);
            }

            return A;
        } catch (Y) {
            console.log(Y);
            throw n;
        }
    } else {
        if (p.match(/^[0-9a-f:]+$/) && p.indexOf(":") !== -1) return ipv6tohex(p);else throw n;
    }
}

function encodeURIComponentAll(p) {
    var n = encodeURIComponent(p);
    var A = "";

    for (var L = 0; L < n.length; L++) {
        if (n[L] == "%") {
            A = A + n.substr(L, 3);
            L = L + 2;
        } else {
            A = A + "%" + stohex(n[L]);
        }
    }

    return A;
}

function newline_toUnix(p) {
    return p = p.replace(/\r\n/mg, "\n"), p;
}

function newline_toDos(p) {
    return p = p.replace(/\r\n/mg, "\n"), p = p.replace(/\n/mg, "\r\n"), p;
}

KJUR.lang.String.isInteger = function (p) {
    return p.match(/^[0-9]+$/) ? !![] : p.match(/^-[0-9]+$/) ? !![] : ![];
};

KJUR.lang.String.isHex = function (p) {
    return p.length % 2 == 0 && (p.match(/^[0-9a-f]+$/) || p.match(/^[0-9A-F]+$/)) ? !![] : ![];
};

KJUR.lang.String.isBase64 = function (p) {
    return p = p.replace(/\s+/g, ""), p.match(/^[0-9A-Za-z+\/]+={0,3}$/) && p.length % 4 == 0 ? !![] : ![];
};

KJUR.lang.String.isBase64URL = function (p) {
    if (p.match(/[+/=]/)) return ![];
    return p = b64utob64(p), KJUR.lang.String.isBase64(p);
};

KJUR.lang.String.isIntegerArray = function (p) {
    return p = p.replace(/\s+/g, ""), p.match(/^\[[0-9,]+\]$/) ? !![] : ![];
};

function hextoposhex(p) {
    if (p.length % 2 == 1) return "0" + p;
    if (p.substr(0, 1) > "7") return "00" + p;
    return p;
}

function intarystrtohex(p) {
    p = p.replace(/^\s*\[\s*/, "");
    p = p.replace(/\s*\]\s*$/, "");
    p = p.replace(/\s*/g, "");

    try {
        var n = p.split(/,/).map(function (A, L, S) {
            var Y = parseInt(A);
            if (Y < 0 || 255 < Y) throw "integer not in range 0-255";
            var J = ("00" + Y.toString(16)).slice(-2);
            return J;
        }).join("");
        return n;
    } catch (A) {
        console.log(A);
        throw "malformed integer array string: " + A;
    }
}

var strdiffidx = function (p, n) {
    var A = p.length;

    if (p.length > n.length) {
        A = n.length;
    }

    for (var L = 0; L < A; L++) {
        if (p.charCodeAt(L) != n.charCodeAt(L)) return L;
    }

    if (p.length != n.length) return A;
    return -1;
};

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) {
    KJUR.crypto = {};
}

KJUR.crypto.Util = new function () {
    this.DIGESTINFOHEAD = {
        "sha1": "3021300906052b0e03021a05000414",
        "sha224": "302d300d06096086480165030402040500041c",
        "sha256": "3031300d060960864801650304020105000420",
        "sha384": "3041300d060960864801650304020205000430",
        "sha512": "3051300d060960864801650304020305000440",
        "md2": "3020300c06082a864886f70d020205000410",
        "md5": "3020300c06082a864886f70d020505000410",
        "ripemd160": "3021300906052b2403020105000414"
    };
    this.DEFAULTPROVIDER = {
        "md5": "cryptojs",
        "sha1": "cryptojs",
        "sha224": "cryptojs",
        "sha256": "cryptojs",
        "sha384": "cryptojs",
        "sha512": "cryptojs",
        "ripemd160": "cryptojs",
        "hmacmd5": "cryptojs",
        "hmacsha1": "cryptojs",
        "hmacsha224": "cryptojs",
        "hmacsha256": "cryptojs",
        "hmacsha384": "cryptojs",
        "hmacsha512": "cryptojs",
        "hmacripemd160": "cryptojs",
        "MD5withRSA": "cryptojs/jsrsa",
        "SHA1withRSA": "cryptojs/jsrsa",
        "SHA224withRSA": "cryptojs/jsrsa",
        "SHA256withRSA": "cryptojs/jsrsa",
        "SHA384withRSA": "cryptojs/jsrsa",
        "SHA512withRSA": "cryptojs/jsrsa",
        "RIPEMD160withRSA": "cryptojs/jsrsa",
        "MD5withECDSA": "cryptojs/jsrsa",
        "SHA1withECDSA": "cryptojs/jsrsa",
        "SHA224withECDSA": "cryptojs/jsrsa",
        "SHA256withECDSA": "cryptojs/jsrsa",
        "SHA384withECDSA": "cryptojs/jsrsa",
        "SHA512withECDSA": "cryptojs/jsrsa",
        "RIPEMD160withECDSA": "cryptojs/jsrsa",
        "SHA1withDSA": "cryptojs/jsrsa",
        "SHA224withDSA": "cryptojs/jsrsa",
        "SHA256withDSA": "cryptojs/jsrsa",
        "MD5withRSAandMGF1": "cryptojs/jsrsa",
        "SHA1withRSAandMGF1": "cryptojs/jsrsa",
        "SHA224withRSAandMGF1": "cryptojs/jsrsa",
        "SHA256withRSAandMGF1": "cryptojs/jsrsa",
        "SHA384withRSAandMGF1": "cryptojs/jsrsa",
        "SHA512withRSAandMGF1": "cryptojs/jsrsa",
        "RIPEMD160withRSAandMGF1": "cryptojs/jsrsa"
    };
    this.CRYPTOJSMESSAGEDIGESTNAME = {
        "md5": CryptoJS.algo.MD5,
        "sha1": CryptoJS.algo.SHA1,
        "sha224": CryptoJS.algo.SHA224,
        "sha256": CryptoJS.algo.SHA256,
        "sha384": CryptoJS.algo.SHA384,
        "sha512": CryptoJS.algo.SHA512,
        "ripemd160": CryptoJS.algo.RIPEMD160
    };

    this.getDigestInfoHex = function (p, n) {
        if (typeof this.DIGESTINFOHEAD[n] == "undefined") throw "alg not supported in Util.DIGESTINFOHEAD: " + n;
        return this.DIGESTINFOHEAD[n] + p;
    };

    this.getPaddedDigestInfoHex = function (p, n, A) {
        var L = this.getDigestInfoHex(p, n);
        var S = A / 4;
        if (L.length + 22 > S) throw "key is too short for SigAlg: keylen=" + A + "," + n;
        var Y = "0001";
        var J = "00" + L;
        var C = "";
        var V = S - Y.length - J.length;

        for (var W = 0; W < V; W += 2) {
            C += "ff";
        }

        var R = Y + C + J;
        return R;
    };

    this.hashString = function (p, n) {
        var A = new KJUR.crypto.MessageDigest({
            "alg": n
        });
        return A.digestString(p);
    };

    this.hashHex = function (p, n) {
        var A = new KJUR.crypto.MessageDigest({
            "alg": n
        });
        return A.digestHex(p);
    };

    this.sha1 = function (p) {
        return this.hashString(p, "sha1");
    };

    this.sha256 = function (p) {
        return this.hashString(p, "sha256");
    };

    this.sha256Hex = function (p) {
        return this.hashHex(p, "sha256");
    };

    this.sha512 = function (p) {
        return this.hashString(p, "sha512");
    };

    this.sha512Hex = function (p) {
        return this.hashHex(p, "sha512");
    };

    this.isKey = function (p) {
        return p instanceof RSAKey || p instanceof KJUR.crypto.DSA || p instanceof KJUR.crypto.ECDSA ? !![] : ![];
    };
}();

KJUR.crypto.Util.md5 = function (p) {
    var n = new KJUR.crypto.MessageDigest({
        "alg": "md5",
        "prov": "cryptojs"
    });
    return n.digestString(p);
};

KJUR.crypto.Util.ripemd160 = function (p) {
    var n = new KJUR.crypto.MessageDigest({
        "alg": "ripemd160",
        "prov": "cryptojs"
    });
    return n.digestString(p);
};

KJUR.crypto.Util.SECURERANDOMGEN = new SecureRandom();

KJUR.crypto.Util.getRandomHexOfNbytes = function (p) {
    var n = new Array(p);
    return KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(n), BAtohex(n);
};

KJUR.crypto.Util.getRandomBigIntegerOfNbytes = function (p) {
    return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbytes(p), 16);
};

KJUR.crypto.Util.getRandomHexOfNbits = function (p) {
    var n = p % 8;
    var A = (p - n) / 8;
    var L = new Array(A + 1);
    return KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(L), L[0] = (255 << n & 255 ^ 255) & L[0], BAtohex(L);
};

KJUR.crypto.Util.getRandomBigIntegerOfNbits = function (p) {
    return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbits(p), 16);
};

KJUR.crypto.Util.getRandomBigIntegerZeroToMax = function (p) {
    var n = p.bitLength();

    while (1) {
        var A = KJUR.crypto.Util.getRandomBigIntegerOfNbits(n);
        if (p.compareTo(A) != -1) return A;
    }
};

KJUR.crypto.Util.getRandomBigIntegerMinToMax = function (p, n) {
    var A = p.compareTo(n);
    if (A == 1) throw "biMin is greater than biMax";
    if (A == 0) return p;
    var L = n.subtract(p);
    var g = KJUR.crypto.Util.getRandomBigIntegerZeroToMax(L);
    return g.add(p);
};

KJUR.crypto.MessageDigest = function (p) {
    var n = null;
    var A = null;
    var L = null;

    this.setAlgAndProvider = function (S, Y) {
        S = KJUR.crypto.MessageDigest.getCanonicalAlgName(S);

        if (S !== null && Y === undefined) {
            Y = KJUR.crypto.Util.DEFAULTPROVIDER[S];
        }

        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(S) != -1 && Y == "cryptojs") {
            try {
                this.md = KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[S].create();
            } catch (J) {
                console.log(J);
                throw "setAlgAndProvider hash alg set fail alg=" + S + "/" + J;
            }

            this.updateString = function (C) {
                this.md.update(C);
            };

            this.updateHex = function (C) {
                var V = CryptoJS.enc.Hex.parse(C);
                this.md.update(V);
            };

            this.digest = function () {
                var C = this.md.finalize();
                return C.toString(CryptoJS.enc.Hex);
            };

            this.digestString = function (C) {
                return this.updateString(C), this.digest();
            };

            this.digestHex = function (C) {
                return this.updateHex(C), this.digest();
            };
        }

        if (":sha256:".indexOf(S) != -1 && Y == "sjcl") {
            try {
                this.md = new sjcl.hash.sha256();
            } catch (C) {
                console.log(C);
                throw "setAlgAndProvider hash alg set fail alg=" + S + "/" + C;
            }

            this.updateString = function (V) {
                this.md.update(V);
            };

            this.updateHex = function (V) {
                var W = sjcl.codec.hex.toBits(V);
                this.md.update(W);
            };

            this.digest = function () {
                var V = this.md.finalize();
                return sjcl.codec.hex.fromBits(V);
            };

            this.digestString = function (V) {
                return this.updateString(V), this.digest();
            };

            this.digestHex = function (V) {
                return this.updateHex(V), this.digest();
            };
        }
    };

    this.updateString = function (g) {
        throw "updateString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };

    this.updateHex = function (g) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };

    this.digest = function () {
        throw "digest() not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };

    this.digestString = function (g) {
        throw "digestString(str) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };

    this.digestHex = function (g) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algName + "/" + this.provName;
    };

    p !== undefined && p.alg !== undefined && (this.algName = p.alg, p.prov === undefined && (this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName));
};

KJUR.crypto.MessageDigest.getCanonicalAlgName = function (p) {
    return typeof p === "string" && (p = p.toLowerCase(), p = p.replace(/-/, "")), p;
};

KJUR.crypto.MessageDigest.getHashLength = function (p) {
    var n = KJUR.crypto.MessageDigest;
    var A = n.getCanonicalAlgName(p);
    if (n.HASHLENGTH[A] === undefined) throw "not supported algorithm: " + p;
    return n.HASHLENGTH[A];
};

KJUR.crypto.MessageDigest.HASHLENGTH = {
    "md5": 16,
    "sha1": 20,
    "sha224": 28,
    "sha256": 32,
    "sha384": 48,
    "sha512": 64,
    "ripemd160": 20
};

KJUR.crypto.Mac = function (p) {
    var n = null;
    var A = null;
    var L = null;
    var g = null;
    var S = null;

    this.setAlgAndProvider = function (Y, J) {
        Y = Y.toLowerCase();

        if (Y == null) {
            Y = "hmacsha1";
        }

        Y = Y.toLowerCase();
        if (Y.substr(0, 4) != "hmac") throw "setAlgAndProvider unsupported HMAC alg: " + Y;

        if (J === undefined) {
            J = KJUR.crypto.Util.DEFAULTPROVIDER[Y];
        }

        this.algProv = Y + "/" + J;
        var C = Y.substr(4);

        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(C) != -1 && J == "cryptojs") {
            try {
                var V = KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[C];
                this.mac = CryptoJS.algo.HMAC.create(V, this.pass);
            } catch (W) {
                console.log(W);
                throw "setAlgAndProvider hash alg set fail hashAlg=" + C + "/" + W;
            }

            this.updateString = function (R) {
                this.mac.update(R);
            };

            this.updateHex = function (R) {
                var B = CryptoJS.enc.Hex.parse(R);
                this.mac.update(B);
            };

            this.doFinal = function () {
                var R = this.mac.finalize();
                return R.toString(CryptoJS.enc.Hex);
            };

            this.doFinalString = function (R) {
                return this.updateString(R), this.doFinal();
            };

            this.doFinalHex = function (R) {
                return this.updateHex(R), this.doFinal();
            };
        }
    };

    this.updateString = function (Y) {
        throw "updateString(str) not supported for this alg/prov: " + this.algProv;
    };

    this.updateHex = function (Y) {
        throw "updateHex(hex) not supported for this alg/prov: " + this.algProv;
    };

    this.doFinal = function () {
        throw "digest() not supported for this alg/prov: " + this.algProv;
    };

    this.doFinalString = function (Y) {
        throw "digestString(str) not supported for this alg/prov: " + this.algProv;
    };

    this.doFinalHex = function (Y) {
        throw "digestHex(hex) not supported for this alg/prov: " + this.algProv;
    };

    this.setPassword = function (Y) {
        if (typeof Y == "string") {
            var J = Y;

            if (Y.length % 2 == 1 || !Y.match(/^[0-9A-Fa-f]+$/)) {
                J = rstrtohex(Y);
            }

            this.pass = CryptoJS.enc.Hex.parse(J);
            return;
        }

        if (typeof Y != "object") throw "KJUR.crypto.Mac unsupported password type: " + Y;
        var J = null;

        if (Y.hex !== undefined) {
            if (Y.hex.length % 2 != 0 || !Y.hex.match(/^[0-9A-Fa-f]+$/)) throw "Mac: wrong hex password: " + Y.hex;
            J = Y.hex;
        }

        if (Y.utf8 !== undefined) {
            J = utf8tohex(Y.utf8);
        }

        if (Y.rstr !== undefined) {
            J = rstrtohex(Y.rstr);
        }

        if (Y.b64 !== undefined) {
            J = b64tohex(Y.b64);
        }

        if (Y.b64u !== undefined) {
            J = b64utohex(Y.b64u);
        }

        if (J == null) throw "KJUR.crypto.Mac unsupported password type: " + Y;
        this.pass = CryptoJS.enc.Hex.parse(J);
    };

    p !== undefined && (p.pass !== undefined && this.setPassword(p.pass), p.alg !== undefined && (this.algName = p.alg, p.prov === undefined && (this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]), this.setAlgAndProvider(this.algName, this.provName)));
};

KJUR.crypto.Signature = function (A) {
    var L = null;
    var S = null;
    var Y = null;
    var J = null;
    var C = null;
    var V = null;
    var W = null;
    var R = null;
    var B = null;
    var F = null;
    var E = -1;
    var s = null;
    var I = null;
    var K = null;
    var T = null;
    var Z = null;

    this._setAlgNames = function () {
        var w = this.algName.match(/^(.+)with(.+)$/);

        if (w) {
            this.mdAlgName = w[1].toLowerCase();
            this.pubkeyAlgName = w[2].toLowerCase();
        }
    };

    this._zeroPaddingOfSignature = function (M, U) {
        var H = "";
        var O = U / 4 - M.length;

        for (var X = 0; X < O; X++) {
            H = H + "0";
        }

        return H + M;
    };

    this.setAlgAndProvider = function (w, M) {
        this._setAlgNames();

        if (M != "cryptojs/jsrsa") throw "provider not supported: " + M;

        if (":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName) != -1) {
            try {
                this.md = new KJUR.crypto.MessageDigest({
                    "alg": this.mdAlgName
                });
            } catch (U) {
                console.log(U);
                throw "setAlgAndProvider hash alg set fail alg=" + this.mdAlgName + "/" + U;
            }

            this.init = function (H, O) {
                var X = null;

                try {
                    if (O === undefined) {
                        X = KEYUTIL.getKey(H);
                    } else {
                        X = KEYUTIL.getKey(H, O);
                    }
                } catch (G) {
                    console.log(G);
                    throw "init failed:" + G;
                }

                if (X.isPrivate === !![]) {
                    this.prvKey = X;
                    this.state = "SIGN";
                } else {
                    if (X.isPublic === !![]) {
                        this.pubKey = X;
                        this.state = "VERIFY";
                    } else throw "init failed.:" + X;
                }
            };

            this.updateString = function (H) {
                this.md.updateString(H);
            };

            this.updateHex = function (H) {
                this.md.updateHex(H);
            };

            this.sign = function () {
                this.sHashHex = this.md.digest();

                if (this.prvKey === undefined && this.ecprvhex !== undefined && this.eccurvename !== undefined && KJUR.crypto.ECDSA !== undefined) {
                    this.prvKey = new KJUR.crypto.ECDSA({
                        "curve": this.eccurvename,
                        "prv": this.ecprvhex
                    });
                }

                if (this.prvKey instanceof RSAKey && this.pubkeyAlgName === "rsaandmgf1") this.hSign = this.prvKey.signWithMessageHashPSS(this.sHashHex, this.mdAlgName, this.pssSaltLen);else {
                    if (this.prvKey instanceof RSAKey && this.pubkeyAlgName === "rsa") this.hSign = this.prvKey.signWithMessageHash(this.sHashHex, this.mdAlgName);else {
                        if (this.prvKey instanceof KJUR.crypto.ECDSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);else {
                            if (this.prvKey instanceof KJUR.crypto.DSA) this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);else throw "Signature: unsupported private key alg: " + this.pubkeyAlgName;
                        }
                    }
                }
                return this.hSign;
            };

            this.signString = function (H) {
                return this.updateString(H), this.sign();
            };

            this.signHex = function (H) {
                return this.updateHex(H), this.sign();
            };

            this.verify = function (H) {
                this.sHashHex = this.md.digest();

                if (this.pubKey === undefined && this.ecpubhex !== undefined && this.eccurvename !== undefined && KJUR.crypto.ECDSA !== undefined) {
                    this.pubKey = new KJUR.crypto.ECDSA({
                        "curve": this.eccurvename,
                        "pub": this.ecpubhex
                    });
                }

                if (this.pubKey instanceof RSAKey && this.pubkeyAlgName === "rsaandmgf1") return this.pubKey.verifyWithMessageHashPSS(this.sHashHex, H, this.mdAlgName, this.pssSaltLen);else {
                    if (this.pubKey instanceof RSAKey && this.pubkeyAlgName === "rsa") return this.pubKey.verifyWithMessageHash(this.sHashHex, H);else {
                        if (KJUR.crypto.ECDSA !== undefined && this.pubKey instanceof KJUR.crypto.ECDSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, H);else {
                            if (KJUR.crypto.DSA !== undefined && this.pubKey instanceof KJUR.crypto.DSA) return this.pubKey.verifyWithMessageHash(this.sHashHex, H);else throw "Signature: unsupported public key alg: " + this.pubkeyAlgName;
                        }
                    }
                }
            };
        }
    };

    this.init = function (w, M) {
        throw "init(key, pass) not supported for this alg:prov=" + this.algProvName;
    };

    this.updateString = function (w) {
        throw "updateString(str) not supported for this alg:prov=" + this.algProvName;
    };

    this.updateHex = function (w) {
        throw "updateHex(hex) not supported for this alg:prov=" + this.algProvName;
    };

    this.sign = function () {
        throw "sign() not supported for this alg:prov=" + this.algProvName;
    };

    this.signString = function (w) {
        throw "digestString(str) not supported for this alg:prov=" + this.algProvName;
    };

    this.signHex = function (w) {
        throw "digestHex(hex) not supported for this alg:prov=" + this.algProvName;
    };

    this.verify = function (w) {
        throw "verify(hSigVal) not supported for this alg:prov=" + this.algProvName;
    };

    this.initParams = A;

    if (A !== undefined) {
        if (A.alg !== undefined) {
            this.algName = A.alg;
            A.prov === undefined ? this.provName = KJUR.crypto.Util.DEFAULTPROVIDER[this.algName] : this.provName = A.prov;
            this.algProvName = this.algName + ":" + this.provName;
            this.setAlgAndProvider(this.algName, this.provName);

            this._setAlgNames();
        }

        if (A.psssaltlen !== undefined) {
            this.pssSaltLen = A.psssaltlen;
        }

        if (A.prvkeypem !== undefined) {
            if (A.prvkeypas !== undefined) throw "both prvkeypem and prvkeypas parameters not supported";else try {
                var L = KEYUTIL.getKey(A.prvkeypem);
                this.init(L);
            } catch (w) {
                console.log(w);
                throw "fatal error to load pem private key: " + w;
            }
        }
    }
};

KJUR.crypto.Cipher = function (p) {};

KJUR.crypto.Cipher.encrypt = function (p, n, a) {
    if (n instanceof RSAKey && n.isPublic) {
        var A = KJUR.crypto.Cipher.getAlgByKeyAndName(n, a);
        if (A === "RSA") return n.encrypt(p);
        if (A === "RSAOAEP") return n.encryptOAEP(p, "sha1");
        var L = A.match(/^RSAOAEP(\d+)$/);
        if (L !== null) return n.encryptOAEP(p, "sha" + L[1]);
        throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + a;
    } else throw "Cipher.encrypt: unsupported key or algorithm";
};

KJUR.crypto.Cipher.decrypt = function (p, n, a) {
    if (n instanceof RSAKey && n.isPrivate) {
        var A = KJUR.crypto.Cipher.getAlgByKeyAndName(n, a);
        if (A === "RSA") return n.decrypt(p);
        if (A === "RSAOAEP") return n.decryptOAEP(p, "sha1");
        var L = A.match(/^RSAOAEP(\d+)$/);
        if (L !== null) return n.decryptOAEP(p, "sha" + L[1]);
        throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + a;
    } else throw "Cipher.decrypt: unsupported key or algorithm";
};

KJUR.crypto.Cipher.getAlgByKeyAndName = function (p, n) {
    if (p instanceof RSAKey) {
        if (":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(n) != -1) return n;
        if (n === null || n === undefined) return "RSA";
        throw "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + n;
    }

    throw "getAlgByKeyAndName: not supported algorithm name: " + n;
};

KJUR.crypto.OID = new function () {
    this.oidhex2name = {
        "2a864886f70d010101": "rsaEncryption",
        "2a8648ce3d0201": "ecPublicKey",
        "2a8648ce380401": "dsa",
        "2a8648ce3d030107": "secp256r1",
        "2b8104001f": "secp192k1",
        "2b81040021": "secp224r1",
        "2b8104000a": "secp256k1",
        "2b81040023": "secp521r1",
        "2b81040022": "secp384r1",
        "2a8648ce380403": "SHA1withDSA",
        "608648016503040301": "SHA224withDSA",
        "608648016503040302": "SHA256withDSA"
    };
}();

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) {
    KJUR.crypto = {};
}

KJUR.crypto.ECDSA = function (p) {
    var n = "secp256r1";
    var A = null;
    var L = null;
    var S = null;
    var Y = BigInteger;
    var J = ECPointFp;
    var C = KJUR.crypto.ECDSA;
    var V = KJUR.crypto.ECParameterDB;
    var W = new SecureRandom();
    var R = null;
    this.type = "EC";
    this.isPrivate = ![];
    this.isPublic = ![];

    function B(F, E, I, K) {
        var T = Math.max(E.bitLength(), K.bitLength());
        var Z = F.add2D(I);
        var w = F.curve.getInfinity();

        for (var M = T - 1; M >= 0; --M) {
            w = w.twice2D();
            w.z = Y.ONE;
            E.testBit(M) ? K.testBit(M) ? w = w.add2D(Z) : w = w.add2D(F) : K.testBit(M) && (w = w.add2D(I));
        }

        return w;
    }

    this.getBigRandom = function (F) {
        return new Y(F.bitLength(), W).mod(F.subtract(Y.ONE)).add(Y.ONE);
    };

    this.setNamedCurve = function (F) {
        this.ecparams = V.getByName(F);
        this.prvKeyHex = null;
        this.pubKeyHex = null;
        this.curveName = F;
    };

    this.setPrivateKeyHex = function (F) {
        this.isPrivate = !![];
        this.prvKeyHex = F;
    };

    this.setPublicKeyHex = function (F) {
        this.isPublic = !![];
        this.pubKeyHex = F;
    };

    this.getPublicKeyXYHex = function () {
        var F = this.pubKeyHex;
        if (F.substr(0, 2) !== "04") throw "this method supports uncompressed format(04) only";
        var E = this.ecparams.keylen / 4;
        if (F.length !== 2 + E * 2) throw "malformed public key hex length";
        var s = {};
        return s.x = F.substr(2, E), s.y = F.substr(2 + E), s;
    };

    this.getShortNISTPCurveName = function () {
        var F = this.curveName;
        if (F === "secp256r1" || F === "NIST P-256" || F === "P-256" || F === "prime256v1") return "P-256";
        if (F === "secp384r1" || F === "NIST P-384" || F === "P-384") return "P-384";
        return null;
    };

    this.generateKeyPairHex = function () {
        var F = this.ecparams.n;
        var E = this.getBigRandom(F);
        var I = this.ecparams.G.multiply(E);
        var K = I.getX().toBigInteger();
        var T = I.getY().toBigInteger();
        var Z = this.ecparams.keylen / 4;
        var w = ("0000000000" + E.toString(16)).slice(-Z);
        var M = ("0000000000" + K.toString(16)).slice(-Z);
        var U = ("0000000000" + T.toString(16)).slice(-Z);
        var H = "04" + M + U;
        return this.setPrivateKeyHex(w), this.setPublicKeyHex(H), {
            "ecprvhex": w,
            "ecpubhex": H
        };
    };

    this.signWithMessageHash = function (F) {
        return this.signHex(F, this.prvKeyHex);
    };

    this.signHex = function (F, E) {
        var s = new Y(E, 16);
        var I = this.ecparams.n;
        var K = new Y(F.substring(0, this.ecparams.keylen / 4), 16);

        do {
            var T = this.getBigRandom(I);
            var Z = this.ecparams.G;
            var M = Z.multiply(T);
            var U = M.getX().toBigInteger().mod(I);
        } while (U.compareTo(Y.ZERO) <= 0);

        var H = T.modInverse(I).multiply(K.add(s.multiply(U))).mod(I);
        return C.biRSSigToASN1Sig(U, H);
    };

    this.sign = function (F, E) {
        var s = E;
        var I = this.ecparams.n;
        var K = Y.fromByteArrayUnsigned(F);

        do {
            var T = this.getBigRandom(I);
            var Z = this.ecparams.G;
            var M = Z.multiply(T);
            var U = M.getX().toBigInteger().mod(I);
        } while (U.compareTo(BigInteger.ZERO) <= 0);

        var H = T.modInverse(I).multiply(K.add(s.multiply(U))).mod(I);
        return this.serializeSig(U, H);
    };

    this.verifyWithMessageHash = function (F, E) {
        return this.verifyHex(F, E, this.pubKeyHex);
    };

    this.verifyHex = function (F, E, s) {
        try {
            var I;
            var K;
            var T = C.parseSigHex(E);
            I = T.r;
            K = T.s;
            var Z = J.decodeFromHex(this.ecparams.curve, s);
            var M = new Y(F.substring(0, this.ecparams.keylen / 4), 16);
            return this.verifyRaw(M, I, K, Z);
        } catch (U) {
            console.log(U);
            return ![];
        }
    };

    this.verify = function (F, E, s) {
        var I;
        var K;

        if (Bitcoin.Util.isArray(E)) {
            var T = this.parseSig(E);
            I = T.r;
            K = T.s;
        } else {
            if ("object" === typeof E && E.r && E.s) {
                I = E.r;
                K = E.s;
            } else throw "Invalid value for signature";
        }

        var Z;
        if (s instanceof ECPointFp) Z = s;else {
            if (Bitcoin.Util.isArray(s)) Z = J.decodeFrom(this.ecparams.curve, s);else throw "Invalid format for pubkey value, must be byte array or ECPointFp";
        }
        var w = Y.fromByteArrayUnsigned(F);
        return this.verifyRaw(w, I, K, Z);
    };

    this.verifyRaw = function (F, E, s, I) {
        var K = this.ecparams.n;
        var T = this.ecparams.G;
        if (E.compareTo(Y.ONE) < 0 || E.compareTo(K) >= 0) return ![];
        if (s.compareTo(Y.ONE) < 0 || s.compareTo(K) >= 0) return ![];
        var Z = s.modInverse(K);
        var M = F.multiply(Z).mod(K);
        var U = E.multiply(Z).mod(K);
        var H = T.multiply(M).add(I.multiply(U));
        var O = H.getX().toBigInteger().mod(K);
        return O.equals(E);
    };

    this.serializeSig = function (F, E) {
        var s = F.toByteArraySigned();
        var I = E.toByteArraySigned();
        var K = [];
        return K.push(2), K.push(s.length), K = K.concat(s), K.push(2), K.push(I.length), K = K.concat(I), K.unshift(K.length), K.unshift(48), K;
    };

    this.parseSig = function (F) {
        var E;
        if (F[0] != 48) throw new Error("Signature not a valid DERSequence");
        E = 2;
        if (F[E] != 2) throw new Error("First element in signature must be a DERInteger");
        var s = F.slice(E + 2, E + 2 + F[E + 1]);
        E += 2 + F[E + 1];
        if (F[E] != 2) throw new Error("Second element in signature must be a DERInteger");
        var I = F.slice(E + 2, E + 2 + F[E + 1]);
        E += 2 + F[E + 1];
        var K = Y.fromByteArrayUnsigned(s);
        var T = Y.fromByteArrayUnsigned(I);
        return {
            "r": K,
            "s": T
        };
    };

    this.parseSigCompact = function (F) {
        if (F.length !== 65) throw "Signature has the wrong length";
        var E = F[0] - 27;
        if (E < 0 || E > 7) throw "Invalid signature type";
        var s = this.ecparams.n;
        var I = Y.fromByteArrayUnsigned(F.slice(1, 33)).mod(s);
        var K = Y.fromByteArrayUnsigned(F.slice(33, 65)).mod(s);
        return {
            "r": I,
            "s": K,
            "i": E
        };
    };

    this.readPKCS5PrvKeyHex = function (F) {
        var E = ASN1HEX;
        var I = C.getName;
        var K = E.getVbyList;
        if (E.isASN1HEX(F) === ![]) throw "not ASN.1 hex string";
        var T;
        var Z;
        var w;

        try {
            T = K(F, 0, [2, 0], "06");
            Z = K(F, 0, [1], "04");

            try {
                w = K(F, 0, [3, 0], "03").substr(2);
            } catch (M) {
                console.log(M);
            }
        } catch (u) {
            console.log(u);
            throw "malformed PKCS#1/5 plain ECC private key";
        }

        this.curveName = I(T);
        if (this.curveName === undefined) throw "unsupported curve name";
        this.setNamedCurve(this.curveName);
        this.setPublicKeyHex(w);
        this.setPrivateKeyHex(Z);
        this.isPublic = ![];
    };

    this.readPKCS8PrvKeyHex = function (F) {
        var E = ASN1HEX;
        var I = KJUR.crypto.ECDSA.getName;
        var K = E.getVbyList;
        if (E.isASN1HEX(F) === ![]) throw "not ASN.1 hex string";
        var T;
        var Z;
        var w;
        var M;

        try {
            T = K(F, 0, [1, 0], "06");
            Z = K(F, 0, [1, 1], "06");
            w = K(F, 0, [2, 0, 1], "04");

            try {
                M = K(F, 0, [2, 0, 2, 0], "03").substr(2);
            } catch (U) {
                console.log(U);
            }
        } catch (H) {
            console.log(H);
            throw "malformed PKCS#8 plain ECC private key";
        }

        this.curveName = I(Z);
        if (this.curveName === undefined) throw "unsupported curve name";
        this.setNamedCurve(this.curveName);
        this.setPublicKeyHex(M);
        this.setPrivateKeyHex(w);
        this.isPublic = ![];
    };

    this.readPKCS8PubKeyHex = function (F) {
        var E = ASN1HEX;
        var I = KJUR.crypto.ECDSA.getName;
        var K = E.getVbyList;
        if (E.isASN1HEX(F) === ![]) throw "not ASN.1 hex string";
        var T;
        var Z;
        var w;

        try {
            T = K(F, 0, [0, 0], "06");
            Z = K(F, 0, [0, 1], "06");
            w = K(F, 0, [1], "03").substr(2);
        } catch (M) {
            console.log(M);
            throw "malformed PKCS#8 ECC public key";
        }

        this.curveName = I(Z);
        if (this.curveName === null) throw "unsupported curve name";
        this.setNamedCurve(this.curveName);
        this.setPublicKeyHex(w);
    };

    this.readCertPubKeyHex = function (F, E) {
        if (E !== 5) {
            E = 6;
        }

        var I = ASN1HEX;
        var K = C.getName;
        var T = I.getVbyList;
        if (I.isASN1HEX(F) === ![]) throw "not ASN.1 hex string";
        var Z;
        var w;

        try {
            Z = T(F, 0, [0, E, 0, 1], "06");
            w = T(F, 0, [0, E, 1], "03").substr(2);
        } catch (M) {
            console.log(M);
            throw "malformed X.509 certificate ECC public key";
        }

        this.curveName = K(Z);
        if (this.curveName === null) throw "unsupported curve name";
        this.setNamedCurve(this.curveName);
        this.setPublicKeyHex(w);
    };

    p !== undefined && p.curve !== undefined && (this.curveName = p.curve);
    this.curveName === undefined && (this.curveName = n);
    this.setNamedCurve(this.curveName);
    p !== undefined && (p.prv !== undefined && this.setPrivateKeyHex(p.prv), p.pub !== undefined && this.setPublicKeyHex(p.pub));
};

KJUR.crypto.ECDSA.parseSigHex = function (p) {
    var n = KJUR.crypto.ECDSA.parseSigHexInHexRS(p);
    var A = new BigInteger(n.r, 16);
    var L = new BigInteger(n.s, 16);
    return {
        "r": A,
        "s": L
    };
};

KJUR.crypto.ECDSA.parseSigHexInHexRS = function (p) {
    var n = ASN1HEX;
    var a = n.getChildIdx;
    var A = n.getV;
    n.checkStrictDER(p, 0);
    if (p.substr(0, 2) != "30") throw new Error("signature is not a ASN.1 sequence");
    var L = a(p, 0);
    if (L.length != 2) throw new Error("signature shall have two elements");
    var S = L[0];
    var Y = L[1];
    if (p.substr(S, 2) != "02") throw new Error("1st item not ASN.1 integer");
    if (p.substr(Y, 2) != "02") throw new Error("2nd item not ASN.1 integer");
    var J = A(p, S);
    var C = A(p, Y);
    return {
        "r": J,
        "s": C
    };
};

KJUR.crypto.ECDSA.asn1SigToConcatSig = function (p) {
    var n = KJUR.crypto.ECDSA.parseSigHexInHexRS(p);
    var A = n.r;
    var L = n.s;

    if (A.substr(0, 2) == "00" && A.length % 32 == 2) {
        A = A.substr(2);
    }

    if (L.substr(0, 2) == "00" && L.length % 32 == 2) {
        L = L.substr(2);
    }

    if (A.length % 32 == 30) {
        A = "00" + A;
    }

    if (L.length % 32 == 30) {
        L = "00" + L;
    }

    if (A.length % 32 != 0) throw "unknown ECDSA sig r length error";
    if (L.length % 32 != 0) throw "unknown ECDSA sig s length error";
    return A + L;
};

KJUR.crypto.ECDSA.concatSigToASN1Sig = function (p) {
    if (p.length / 2 * 8 % 128 != 0) throw "unknown ECDSA concatinated r-s sig  length error";
    var n = p.substr(0, p.length / 2);
    var A = p.substr(p.length / 2);
    return KJUR.crypto.ECDSA.hexRSSigToASN1Sig(n, A);
};

KJUR.crypto.ECDSA.hexRSSigToASN1Sig = function (p, n) {
    var A = new BigInteger(p, 16);
    var L = new BigInteger(n, 16);
    return KJUR.crypto.ECDSA.biRSSigToASN1Sig(A, L);
};

KJUR.crypto.ECDSA.biRSSigToASN1Sig = function (p, n) {
    var A = KJUR.asn1;
    var L = new A.DERInteger({
        "bigint": p
    });
    var g = new A.DERInteger({
        "bigint": n
    });
    var S = new A.DERSequence({
        "array": [L, g]
    });
    return S.getEncodedHex();
};

KJUR.crypto.ECDSA.getName = function (p) {
    if (p === "2b8104001f") return "secp192k1";
    if (p === "2a8648ce3d030107") return "secp256r1";
    if (p === "2b8104000a") return "secp256k1";
    if (p === "2b81040021") return "secp224r1";
    if (p === "2b81040022") return "secp384r1";
    if ("|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(p) !== -1) return "secp256r1";
    if ("|secp256k1|".indexOf(p) !== -1) return "secp256k1";
    if ("|secp224r1|NIST P-224|P-224|".indexOf(p) !== -1) return "secp224r1";
    if ("|secp384r1|NIST P-384|P-384|".indexOf(p) !== -1) return "secp384r1";
    return null;
};

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) {
    KJUR.crypto = {};
}

KJUR.crypto.ECParameterDB = new function () {
    var p = {};
    var n = {};

    function A(L) {
        return new BigInteger(L, 16);
    }

    this.getByName = function (L) {
        var g = L;

        if (typeof n[g] != "undefined") {
            g = n[L];
        }

        if (typeof p[g] != "undefined") return p[g];
        throw "unregistered EC curve name: " + g;
    };

    this.regist = function (L, S, Y, J, C, V, W, R, B, F, E, I) {
        p[L] = {};
        var K = A(Y);
        var T = A(J);
        var i = A(C);
        var Z = A(V);
        var M = A(W);
        var U = new ECCurveFp(K, T, i);
        var h = U.decodePointHex("04" + R + B);
        p[L].name = L;
        p[L].keylen = S;
        p[L].curve = U;
        p[L].G = h;
        p[L].n = Z;
        p[L].h = M;
        p[L].oid = E;
        p[L].info = I;

        for (var H = 0; H < F.length; H++) {
            n[F[H]] = L;
        }
    };
}();
KJUR.crypto.ECParameterDB.regist("secp128r1", 128, "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC", "E87579C11079F43DD824993C2CEE5ED3", "FFFFFFFE0000000075A30D1B9038A115", "1", "161FF7528B899B2D0C28607CA52C5B86", "CF5AC8395BAFEB13C02DA292DDED7A83", [], "", "secp128r1 : SECG curve over a 128 bit prime field");
KJUR.crypto.ECParameterDB.regist("secp160k1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73", "0", "7", "0100000000000000000001B8FA16DFAB9ACA16B6B3", "1", "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB", "938CF935318FDCED6BC28286531733C3F03C4FEE", [], "", "secp160k1 : SECG curve over a 160 bit prime field");
KJUR.crypto.ECParameterDB.regist("secp160r1", 160, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC", "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45", "0100000000000000000001F4C8F927AED3CA752257", "1", "4A96B5688EF573284664698968C38BB913CBFC82", "23A628553168947D59DCC912042351377AC5FB32", [], "", "secp160r1 : SECG curve over a 160 bit prime field");
KJUR.crypto.ECParameterDB.regist("secp192k1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37", "0", "3", "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D", "1", "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D", "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D", []);
KJUR.crypto.ECParameterDB.regist("secp192r1", 192, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC", "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1", "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831", "1", "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012", "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811", []);
KJUR.crypto.ECParameterDB.regist("secp224r1", 224, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE", "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4", "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D", "1", "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21", "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34", []);
KJUR.crypto.ECParameterDB.regist("secp256k1", 256, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F", "0", "7", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141", "1", "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798", "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8", []);
KJUR.crypto.ECParameterDB.regist("secp256r1", 256, "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF", "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC", "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B", "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551", "1", "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296", "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5", ["NIST P-256", "P-256", "prime256v1"]);
KJUR.crypto.ECParameterDB.regist("secp384r1", 384, "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC", "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF", "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973", "1", "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7", "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f", ["NIST P-384", "P-384"]);
KJUR.crypto.ECParameterDB.regist("secp521r1", 521, "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC", "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00", "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409", "1", "C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66", "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650", ["NIST P-521", "P-521"]);

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) {
    KJUR.crypto = {};
}

KJUR.crypto.DSA = function () {
    this.p = null;
    this.q = null;
    this.g = null;
    this.y = null;
    this.x = null;
    this.type = "DSA";
    this.isPrivate = ![];
    this.isPublic = ![];

    this.setPrivate = function (p, n, A, L, g) {
        this.isPrivate = !![];
        this.p = p;
        this.q = n;
        this.g = A;
        this.y = L;
        this.x = g;
    };

    this.setPrivateHex = function (p, n, A, L, S) {
        var Y;
        var J;
        var C;
        var V;
        var W;
        Y = new BigInteger(p, 16);
        J = new BigInteger(n, 16);
        C = new BigInteger(A, 16);
        typeof L === "string" && L.length > 1 ? V = new BigInteger(L, 16) : V = null;
        W = new BigInteger(S, 16);
        this.setPrivate(Y, J, C, V, W);
    };

    this.setPublic = function (p, n, A, L) {
        this.isPublic = !![];
        this.p = p;
        this.q = n;
        this.g = A;
        this.y = L;
        this.x = null;
    };

    this.setPublicHex = function (p, n, A, L) {
        var S;
        var Y;
        var J;
        var C;
        S = new BigInteger(p, 16);
        Y = new BigInteger(n, 16);
        J = new BigInteger(A, 16);
        C = new BigInteger(L, 16);
        this.setPublic(S, Y, J, C);
    };

    this.signWithMessageHash = function (p) {
        var A = this.p;
        var L = this.q;
        var g = this.g;
        var S = this.y;
        var Y = this.x;
        var J = KJUR.crypto.Util.getRandomBigIntegerMinToMax(BigInteger.ONE.add(BigInteger.ONE), L.subtract(BigInteger.ONE));
        var C = p.substr(0, L.bitLength() / 4);
        var V = new BigInteger(C, 16);
        var W = g.modPow(J, A).mod(L);
        var R = J.modInverse(L).multiply(V.add(Y.multiply(W))).mod(L);
        var B = KJUR.asn1.ASN1Util.jsonToASN1HEX({
            "seq": [{
                "int": {
                    "bigint": W
                }
            }, {
                "int": {
                    "bigint": R
                }
            }]
        });
        return B;
    };

    this.verifyWithMessageHash = function (p, A) {
        var L = this.p;
        var g = this.q;
        var S = this.g;
        var Y = this.y;
        var J = this.parseASN1Signature(A);
        var C = J[0];
        var V = J[1];
        var W = p.substr(0, g.bitLength() / 4);
        var R = new BigInteger(W, 16);
        if (BigInteger.ZERO.compareTo(C) > 0 || C.compareTo(g) > 0) throw "invalid DSA signature";
        if (BigInteger.ZERO.compareTo(V) >= 0 || V.compareTo(g) > 0) throw "invalid DSA signature";
        var B = V.modInverse(g);
        var F = R.multiply(B).mod(g);
        var E = C.multiply(B).mod(g);
        var s = S.modPow(F, L).multiply(Y.modPow(E, L)).mod(L).mod(g);
        return s.compareTo(C) == 0;
    };

    this.parseASN1Signature = function (p) {
        try {
            var n = new BigInteger(ASN1HEX.getVbyList(p, 0, [0], "02"), 16);
            var A = new BigInteger(ASN1HEX.getVbyList(p, 0, [1], "02"), 16);
            return [n, A];
        } catch (L) {
            console.log(L);
            throw "malformed ASN.1 DSA signature";
        }
    };

    this.readPKCS5PrvKeyHex = function (p) {
        var n;
        var A;
        var L;
        var S;
        var Y;
        var J = ASN1HEX;
        var C = J.getVbyList;
        if (J.isASN1HEX(p) === ![]) throw "not ASN.1 hex string";

        try {
            n = C(p, 0, [1], "02");
            A = C(p, 0, [2], "02");
            L = C(p, 0, [3], "02");
            S = C(p, 0, [4], "02");
            Y = C(p, 0, [5], "02");
        } catch (V) {
            console.log(V);
            console.log("EXCEPTION:" + V);
            throw "malformed PKCS#1/5 plain DSA private key";
        }

        this.setPrivateHex(n, A, L, S, Y);
    };

    this.readPKCS8PrvKeyHex = function (p) {
        var n;
        var A;
        var L;
        var S;
        var Y = ASN1HEX;
        var J = Y.getVbyList;
        if (Y.isASN1HEX(p) === ![]) throw "not ASN.1 hex string";

        try {
            n = J(p, 0, [1, 1, 0], "02");
            A = J(p, 0, [1, 1, 1], "02");
            L = J(p, 0, [1, 1, 2], "02");
            S = J(p, 0, [2, 0], "02");
        } catch (C) {
            console.log(C);
            console.log("EXCEPTION:" + C);
            throw "malformed PKCS#8 plain DSA private key";
        }

        this.setPrivateHex(n, A, L, null, S);
    };

    this.readPKCS8PubKeyHex = function (p) {
        var n;
        var A;
        var L;
        var S;
        var Y = ASN1HEX;
        var J = Y.getVbyList;
        if (Y.isASN1HEX(p) === ![]) throw "not ASN.1 hex string";

        try {
            n = J(p, 0, [0, 1, 0], "02");
            A = J(p, 0, [0, 1, 1], "02");
            L = J(p, 0, [0, 1, 2], "02");
            S = J(p, 0, [1, 0], "02");
        } catch (C) {
            console.log(C);
            console.log("EXCEPTION:" + C);
            throw "malformed PKCS#8 DSA public key";
        }

        this.setPublicHex(n, A, L, S);
    };

    this.readCertPubKeyHex = function (p, n) {
        if (n !== 5) {
            n = 6;
        }

        var A;
        var L;
        var S;
        var Y;
        var J = ASN1HEX;
        var C = J.getVbyList;
        if (J.isASN1HEX(p) === ![]) throw "not ASN.1 hex string";

        try {
            A = C(p, 0, [0, n, 0, 1, 0], "02");
            L = C(p, 0, [0, n, 0, 1, 1], "02");
            S = C(p, 0, [0, n, 0, 1, 2], "02");
            Y = C(p, 0, [0, n, 1, 0], "02");
        } catch (V) {
            console.log(V);
            console.log("EXCEPTION:" + V);
            throw "malformed X.509 certificate DSA public key";
        }

        this.setPublicHex(A, L, S, Y);
    };
};

var KEYUTIL = function () {
    var p = function (K, T, Z) {
        return S(CryptoJS.AES, K, T, Z);
    };

    var A = function (K, T, Z) {
        return S(CryptoJS.TripleDES, K, T, Z);
    };

    var L = function (K, T, Z) {
        return S(CryptoJS.DES, K, T, Z);
    };

    var S = function (K, T, Z, M) {
        var U = CryptoJS.enc.Hex.parse(T);
        var H = CryptoJS.enc.Hex.parse(Z);
        var O = CryptoJS.enc.Hex.parse(M);
        var X = {};
        X.key = H;
        X.iv = O;
        X.ciphertext = U;
        var G = K.decrypt(X, H, {
            "iv": O
        });
        return CryptoJS.enc.Hex.stringify(G);
    };

    var Y = function (K, T, Z) {
        return V(CryptoJS.AES, K, T, Z);
    };

    var J = function (K, T, Z) {
        return V(CryptoJS.TripleDES, K, T, Z);
    };

    var C = function (K, T, Z) {
        return V(CryptoJS.DES, K, T, Z);
    };

    var V = function (K, T, Z, M) {
        var U = CryptoJS.enc.Hex.parse(T);
        var H = CryptoJS.enc.Hex.parse(Z);
        var O = CryptoJS.enc.Hex.parse(M);
        var X = K.encrypt(U, H, {
            "iv": O
        });
        var G = CryptoJS.enc.Hex.parse(X.toString());
        var N = CryptoJS.enc.Base64.stringify(G);
        return N;
    };

    var W = {
        "AES-256-CBC": {
            "proc": p,
            "eproc": Y,
            "keylen": 32,
            "ivlen": 16
        },
        "AES-192-CBC": {
            "proc": p,
            "eproc": Y,
            "keylen": 24,
            "ivlen": 16
        },
        "AES-128-CBC": {
            "proc": p,
            "eproc": Y,
            "keylen": 16,
            "ivlen": 16
        },
        "DES-EDE3-CBC": {
            "proc": A,
            "eproc": J,
            "keylen": 24,
            "ivlen": 8
        },
        "DES-CBC": {
            "proc": L,
            "eproc": C,
            "keylen": 8,
            "ivlen": 8
        }
    };

    var R = function (K) {
        return W[K].proc;
    };

    var B = function (K) {
        var T = CryptoJS.lib.WordArray.random(K);
        var Z = CryptoJS.enc.Hex.stringify(T);
        return Z;
    };

    var F = function (K) {
        var T = {};
        var Z = K.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));

        if (Z) {
            T.cipher = Z[1];
            T.ivsalt = Z[2];
        }

        var M = K.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));

        if (M) {
            T.type = M[1];
        }

        var U = -1;
        var H = 0;

        if (K.indexOf("\r\n\r\n") != -1) {
            U = K.indexOf("\r\n\r\n");
            H = 2;
        }

        if (K.indexOf("\n\n") != -1) {
            U = K.indexOf("\n\n");
            H = 1;
        }

        var O = K.indexOf("-----END");

        if (U != -1 && O != -1) {
            var X = K.substring(U + H * 2, O - H);
            X = X.replace(/\s+/g, "");
            T.data = X;
        }

        return T;
    };

    var E = function (K, T, Z) {
        var M = Z.substring(0, 16);
        var U = CryptoJS.enc.Hex.parse(M);
        var H = CryptoJS.enc.Utf8.parse(T);
        var O = W[K].keylen + W[K].ivlen;
        var X = "";
        var G = null;

        for (;;) {
            var N = CryptoJS.algo.MD5.create();

            if (G != null) {
                N.update(G);
            }

            N.update(H);
            N.update(U);
            G = N.finalize();
            X = X + CryptoJS.enc.Hex.stringify(G);
            if (X.length >= O * 2) break;
        }

        var D = {};
        return D.keyhex = X.substr(0, W[K].keylen * 2), D.ivhex = X.substr(W[K].keylen * 2, W[K].ivlen * 2), D;
    };

    var s = function (K, T, Z, M) {
        var U = CryptoJS.enc.Base64.parse(K);
        var H = CryptoJS.enc.Hex.stringify(U);
        var O = W[T].proc;
        var X = O(H, Z, M);
        return X;
    };

    var I = function (K, T, Z, w) {
        var M = W[T].eproc;
        var U = M(K, Z, w);
        return U;
    };

    return {
        "version": "1.0.0",
        "parsePKCS5PEM": function (K) {
            return F(K);
        },
        "getKeyAndUnusedIvByPasscodeAndIvsalt": function (K, T, Z) {
            return E(K, T, Z);
        },
        "decryptKeyB64": function (K, T, Z, w) {
            return s(K, T, Z, w);
        },
        "getDecryptedKeyHex": function (K, T) {
            var Z = F(K);
            var M = Z.type;
            var U = Z.cipher;
            var H = Z.ivsalt;
            var O = Z.data;
            var X = E(U, T, H);
            var G = X.keyhex;
            var N = s(O, U, G, H);
            return N;
        },
        "getEncryptedPKCS5PEMFromPrvKeyHex": function (K, T, Z, M, U) {
            var H = "";

            if (typeof M == "undefined" || M == null) {
                M = "AES-256-CBC";
            }

            if (typeof W[M] == "undefined") throw "KEYUTIL unsupported algorithm: " + M;

            if (typeof U == "undefined" || U == null) {
                var O = W[M].ivlen;
                var X = B(O);
                U = X.toUpperCase();
            }

            var G = E(M, Z, U);
            var N = G.keyhex;
            var D = I(T, M, N, U);
            var Q = D.replace(/(.{64})/g, "$1\r\n");
            var H = "-----BEGIN " + K + " PRIVATE KEY-----\r\n";
            return H += "Proc-Type: 4,ENCRYPTED\r\n", H += "DEK-Info: " + M + "," + U + "\r\n", H += "\r\n", H += Q, H += "\r\n-----END " + K + " PRIVATE KEY-----\r\n", H;
        },
        "parseHexOfEncryptedPKCS8": function (K) {
            var T = ASN1HEX;
            var Z = T.getChildIdx;
            var M = T.getV;
            var U = {};
            var H = Z(K, 0);
            if (H.length != 2) throw "malformed format: SEQUENCE(0).items != 2: " + H.length;
            U.ciphertext = M(K, H[1]);
            var O = Z(K, H[0]);
            if (O.length != 2) throw "malformed format: SEQUENCE(0.0).items != 2: " + O.length;
            if (M(K, O[0]) != "2a864886f70d01050d") throw "this only supports pkcs5PBES2";
            var X = Z(K, O[1]);
            if (O.length != 2) throw "malformed format: SEQUENCE(0.0.1).items != 2: " + X.length;
            var G = Z(K, X[1]);
            if (G.length != 2) throw "malformed format: SEQUENCE(0.0.1.1).items != 2: " + G.length;
            if (M(K, G[0]) != "2a864886f70d0307") throw "this only supports TripleDES";
            U.encryptionSchemeAlg = "TripleDES";
            U.encryptionSchemeIV = M(K, G[1]);
            var N = Z(K, X[0]);
            if (N.length != 2) throw "malformed format: SEQUENCE(0.0.1.0).items != 2: " + N.length;
            if (M(K, N[0]) != "2a864886f70d01050c") throw "this only supports pkcs5PBKDF2";
            var D = Z(K, N[1]);
            if (D.length < 2) throw "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + D.length;
            U.pbkdf2Salt = M(K, D[0]);
            var Q = M(K, D[1]);

            try {
                U.pbkdf2Iter = parseInt(Q, 16);
            } catch (P) {
                console.log(P);
                throw "malformed format pbkdf2Iter: " + Q;
            }

            return U;
        },
        "getPBKDF2KeyHexFromParam": function (K, T) {
            var Z = CryptoJS.enc.Hex.parse(K.pbkdf2Salt);
            var w = K.pbkdf2Iter;
            var M = CryptoJS.PBKDF2(T, Z, {
                "keySize": 6,
                "iterations": w
            });
            var U = CryptoJS.enc.Hex.stringify(M);
            return U;
        },
        "_getPlainPKCS8HexFromEncryptedPKCS8PEM": function (K, T) {
            var Z = pemtohex(K, "ENCRYPTED PRIVATE KEY");
            var M = this.parseHexOfEncryptedPKCS8(Z);
            var U = KEYUTIL.getPBKDF2KeyHexFromParam(M, T);
            var H = {};
            H.ciphertext = CryptoJS.enc.Hex.parse(M.ciphertext);
            var O = CryptoJS.enc.Hex.parse(U);
            var X = CryptoJS.enc.Hex.parse(M.encryptionSchemeIV);
            var G = CryptoJS.TripleDES.decrypt(H, O, {
                "iv": X
            });
            var N = CryptoJS.enc.Hex.stringify(G);
            return N;
        },
        "getKeyFromEncryptedPKCS8PEM": function (K, T) {
            var Z = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(K, T);

            var w = this.getKeyFromPlainPrivatePKCS8Hex(Z);
            return w;
        },
        "parsePlainPrivatePKCS8Hex": function (K) {
            var T = ASN1HEX;
            var Z = T.getChildIdx;
            var w = T.getV;
            var M = {};
            M.algparam = null;
            if (K.substr(0, 2) != "30") throw "malformed plain PKCS8 private key(code:001)";
            var U = Z(K, 0);
            if (U.length != 3) throw "malformed plain PKCS8 private key(code:002)";
            if (K.substr(U[1], 2) != "30") throw "malformed PKCS8 private key(code:003)";
            var H = Z(K, U[1]);
            if (H.length != 2) throw "malformed PKCS8 private key(code:004)";
            if (K.substr(H[0], 2) != "06") throw "malformed PKCS8 private key(code:005)";
            M.algoid = w(K, H[0]);

            if (K.substr(H[1], 2) == "06") {
                M.algparam = w(K, H[1]);
            }

            if (K.substr(U[2], 2) != "04") throw "malformed PKCS8 private key(code:006)";
            return M.keyidx = T.getVidx(K, U[2]), M;
        },
        "getKeyFromPlainPrivatePKCS8PEM": function (K) {
            var T = pemtohex(K, "PRIVATE KEY");
            var Z = this.getKeyFromPlainPrivatePKCS8Hex(T);
            return Z;
        },
        "getKeyFromPlainPrivatePKCS8Hex": function (K) {
            var T = this.parsePlainPrivatePKCS8Hex(K);
            var Z;
            if (T.algoid == "2a864886f70d010101") Z = new RSAKey();else {
                if (T.algoid == "2a8648ce380401") Z = new KJUR.crypto.DSA();else {
                    if (T.algoid == "2a8648ce3d0201") Z = new KJUR.crypto.ECDSA();else throw "unsupported private key algorithm";
                }
            }
            return Z.readPKCS8PrvKeyHex(K), Z;
        },
        "_getKeyFromPublicPKCS8Hex": function (K) {
            var T;
            var Z = ASN1HEX.getVbyList(K, 0, [0, 0], "06");
            if (Z === "2a864886f70d010101") T = new RSAKey();else {
                if (Z === "2a8648ce380401") T = new KJUR.crypto.DSA();else {
                    if (Z === "2a8648ce3d0201") T = new KJUR.crypto.ECDSA();else throw "unsupported PKCS#8 public key hex";
                }
            }
            return T.readPKCS8PubKeyHex(K), T;
        },
        "parsePublicRawRSAKeyHex": function (K) {
            var T = ASN1HEX;
            var Z = T.getChildIdx;
            var w = T.getV;
            var M = {};
            if (K.substr(0, 2) != "30") throw "malformed RSA key(code:001)";
            var U = Z(K, 0);
            if (U.length != 2) throw "malformed RSA key(code:002)";
            if (K.substr(U[0], 2) != "02") throw "malformed RSA key(code:003)";
            M.n = w(K, U[0]);
            if (K.substr(U[1], 2) != "02") throw "malformed RSA key(code:004)";
            return M.e = w(K, U[1]), M;
        },
        "parsePublicPKCS8Hex": function (K) {
            var T = ASN1HEX;
            var Z = T.getChildIdx;
            var M = T.getV;
            var U = {};
            U.algparam = null;
            var H = Z(K, 0);
            if (H.length != 2) throw "outer DERSequence shall have 2 elements: " + H.length;
            var O = H[0];
            if (K.substr(O, 2) != "30") throw "malformed PKCS8 public key(code:001)";
            var X = Z(K, O);
            if (X.length != 2) throw "malformed PKCS8 public key(code:002)";
            if (K.substr(X[0], 2) != "06") throw "malformed PKCS8 public key(code:003)";
            U.algoid = M(K, X[0]);

            if (K.substr(X[1], 2) == "06") {
                U.algparam = M(K, X[1]);
            } else {
                if (K.substr(X[1], 2) == "30") {
                    U.algparam = {};
                    U.algparam.p = T.getVbyList(K, X[1], [0], "02");
                    U.algparam.q = T.getVbyList(K, X[1], [1], "02");
                    U.algparam.g = T.getVbyList(K, X[1], [2], "02");
                }
            }

            if (K.substr(H[1], 2) != "03") throw "malformed PKCS8 public key(code:004)";
            return U.key = M(K, H[1]).substr(2), U;
        }
    };
}();

KEYUTIL.getKey = function (p, a, g) {
    var S = ASN1HEX;
    var Y = S.getChildIdx;
    var V = S.getV;
    var W = S.getVbyList;
    var R = KJUR.crypto;
    var T = R.ECDSA;
    var Z = R.DSA;
    var q = RSAKey;
    var U = pemtohex;
    var h = KEYUTIL;
    if (typeof q != "undefined" && p instanceof q) return p;
    if (typeof T != "undefined" && p instanceof T) return p;
    if (typeof Z != "undefined" && p instanceof Z) return p;
    if (p.curve !== undefined && p.xy !== undefined && p.d === undefined) return new T({
        "pub": p.xy,
        "curve": p.curve
    });
    if (p.curve !== undefined && p.d !== undefined) return new T({
        "prv": p.d,
        "curve": p.curve
    });

    if (p.kty === undefined && p.n !== undefined && p.e !== undefined && p.d === undefined) {
        var X = new q();
        return X.setPublic(p.n, p.e), X;
    }

    if (p.kty === undefined && p.n !== undefined && p.e !== undefined && p.d !== undefined && p.p !== undefined && p.q !== undefined && p.dp !== undefined && p.dq !== undefined && p.co !== undefined && p.qi === undefined) {
        var X = new q();
        return X.setPrivateEx(p.n, p.e, p.d, p.p, p.q, p.dp, p.dq, p.co), X;
    }

    if (p.kty === undefined && p.n !== undefined && p.e !== undefined && p.d !== undefined && p.p === undefined) {
        var X = new q();
        return X.setPrivate(p.n, p.e, p.d), X;
    }

    if (p.p !== undefined && p.q !== undefined && p.g !== undefined && p.y !== undefined && p.x === undefined) {
        var X = new Z();
        return X.setPublic(p.p, p.q, p.g, p.y), X;
    }

    if (p.p !== undefined && p.q !== undefined && p.g !== undefined && p.y !== undefined && p.x !== undefined) {
        var X = new Z();
        return X.setPrivate(p.p, p.q, p.g, p.y, p.x), X;
    }

    if (p.kty === "RSA" && p.n !== undefined && p.e !== undefined && p.d === undefined) {
        var X = new q();
        return X.setPublic(b64utohex(p.n), b64utohex(p.e)), X;
    }

    if (p.kty === "RSA" && p.n !== undefined && p.e !== undefined && p.d !== undefined && p.p !== undefined && p.q !== undefined && p.dp !== undefined && p.dq !== undefined && p.qi !== undefined) {
        var X = new q();
        return X.setPrivateEx(b64utohex(p.n), b64utohex(p.e), b64utohex(p.d), b64utohex(p.p), b64utohex(p.q), b64utohex(p.dp), b64utohex(p.dq), b64utohex(p.qi)), X;
    }

    if (p.kty === "RSA" && p.n !== undefined && p.e !== undefined && p.d !== undefined) {
        var X = new q();
        return X.setPrivate(b64utohex(p.n), b64utohex(p.e), b64utohex(p.d)), X;
    }

    if (p.kty === "EC" && p.crv !== undefined && p.x !== undefined && p.y !== undefined && p.d === undefined) {
        var x = new T({
            "curve": p.crv
        });
        var y = x.ecparams.keylen / 4;
        var Q = ("0000000000" + b64utohex(p.x)).slice(-y);
        var p0 = ("0000000000" + b64utohex(p.y)).slice(-y);
        var p1 = "04" + Q + p0;
        return x.setPublicKeyHex(p1), x;
    }

    if (p.kty === "EC" && p.crv !== undefined && p.x !== undefined && p.y !== undefined && p.d !== undefined) {
        var x = new T({
            "curve": p.crv
        });
        var y = x.ecparams.keylen / 4;
        var Q = ("0000000000" + b64utohex(p.x)).slice(-y);
        var p0 = ("0000000000" + b64utohex(p.y)).slice(-y);
        var p1 = "04" + Q + p0;
        var p2 = ("0000000000" + b64utohex(p.d)).slice(-y);
        return x.setPublicKeyHex(p1), x.setPrivateKeyHex(p2), x;
    }

    if (g === "pkcs5prv") {
        var p3 = p;
        var S = ASN1HEX;
        var p4;
        var X;
        p4 = Y(p3, 0);

        if (p4.length === 9) {
            X = new q();
            X.readPKCS5PrvKeyHex(p3);
        } else {
            if (p4.length === 6) {
                X = new Z();
                X.readPKCS5PrvKeyHex(p3);
            } else {
                if (p4.length > 2 && p3.substr(p4[1], 2) === "04") {
                    X = new T();
                    X.readPKCS5PrvKeyHex(p3);
                } else throw "unsupported PKCS#1/5 hexadecimal key";
            }
        }

        return X;
    }

    if (g === "pkcs8prv") {
        var X = h.getKeyFromPlainPrivatePKCS8Hex(p);
        return X;
    }

    if (g === "pkcs8pub") return h._getKeyFromPublicPKCS8Hex(p);
    if (g === "x509pub") return X509.getPublicKeyFromCertHex(p);
    if (p.indexOf("-END CERTIFICATE-", 0) != -1 || p.indexOf("-END X509 CERTIFICATE-", 0) != -1 || p.indexOf("-END TRUSTED CERTIFICATE-", 0) != -1) return X509.getPublicKeyFromCertPEM(p);

    if (p.indexOf("-END PUBLIC KEY-") != -1) {
        var p5 = pemtohex(p, "PUBLIC KEY");
        return h._getKeyFromPublicPKCS8Hex(p5);
    }

    if (p.indexOf("-END RSA PRIVATE KEY-") != -1 && p.indexOf("4,ENCRYPTED") == -1) {
        var p6 = U(p, "RSA PRIVATE KEY");
        return h.getKey(p6, null, "pkcs5prv");
    }

    if (p.indexOf("-END DSA PRIVATE KEY-") != -1 && p.indexOf("4,ENCRYPTED") == -1) {
        var p7 = U(p, "DSA PRIVATE KEY");
        var p8 = W(p7, 0, [1], "02");
        var p9 = W(p7, 0, [2], "02");
        var pp = W(p7, 0, [3], "02");
        var pn = W(p7, 0, [4], "02");
        var pc = W(p7, 0, [5], "02");
        var X = new Z();
        return X.setPrivate(new BigInteger(p8, 16), new BigInteger(p9, 16), new BigInteger(pp, 16), new BigInteger(pn, 16), new BigInteger(pc, 16)), X;
    }

    if (p.indexOf("-END EC PRIVATE KEY-") != -1 && p.indexOf("4,ENCRYPTED") == -1) {
        var p6 = U(p, "EC PRIVATE KEY");
        return h.getKey(p6, null, "pkcs5prv");
    }

    if (p.indexOf("-END PRIVATE KEY-") != -1) return h.getKeyFromPlainPrivatePKCS8PEM(p);

    if (p.indexOf("-END RSA PRIVATE KEY-") != -1 && p.indexOf("4,ENCRYPTED") != -1) {
        var pa = h.getDecryptedKeyHex(p, a);
        var pA = new RSAKey();
        return pA.readPKCS5PrvKeyHex(pa), pA;
    }

    if (p.indexOf("-END EC PRIVATE KEY-") != -1 && p.indexOf("4,ENCRYPTED") != -1) {
        var p7 = h.getDecryptedKeyHex(p, a);
        var X = W(p7, 0, [1], "04");
        var pL = W(p7, 0, [2, 0], "06");
        var pg = W(p7, 0, [3, 0], "03").substr(2);
        var pS = "";
        if (KJUR.crypto.OID.oidhex2name[pL] !== undefined) pS = KJUR.crypto.OID.oidhex2name[pL];else throw "undefined OID(hex) in KJUR.crypto.OID: " + pL;
        var x = new T({
            "curve": pS
        });
        return x.setPublicKeyHex(pg), x.setPrivateKeyHex(X), x.isPublic = ![], x;
    }

    if (p.indexOf("-END DSA PRIVATE KEY-") != -1 && p.indexOf("4,ENCRYPTED") != -1) {
        var p7 = h.getDecryptedKeyHex(p, a);
        var p8 = W(p7, 0, [1], "02");
        var p9 = W(p7, 0, [2], "02");
        var pp = W(p7, 0, [3], "02");
        var pn = W(p7, 0, [4], "02");
        var pc = W(p7, 0, [5], "02");
        var X = new Z();
        return X.setPrivate(new BigInteger(p8, 16), new BigInteger(p9, 16), new BigInteger(pp, 16), new BigInteger(pn, 16), new BigInteger(pc, 16)), X;
    }

    if (p.indexOf("-END ENCRYPTED PRIVATE KEY-") != -1) return h.getKeyFromEncryptedPKCS8PEM(p, a);
    throw "not supported argument";
};

KEYUTIL.generateKeypair = function (p, n) {
    if (p == "RSA") {
        var A = n;
        var L = new RSAKey();
        L.generate(A, "10001");
        L.isPrivate = !![];
        L.isPublic = !![];
        var S = new RSAKey();
        var Y = L.n.toString(16);
        var J = L.e.toString(16);
        S.setPublic(Y, J);
        S.isPrivate = ![];
        S.isPublic = !![];
        var C = {};
        return C.prvKeyObj = L, C.pubKeyObj = S, C;
    } else {
        if (p == "EC") {
            var V = n;
            var W = new KJUR.crypto.ECDSA({
                "curve": V
            });
            var l = W.generateKeyPairHex();
            var L = new KJUR.crypto.ECDSA({
                "curve": V
            });
            L.setPublicKeyHex(l.ecpubhex);
            L.setPrivateKeyHex(l.ecprvhex);
            L.isPrivate = !![];
            L.isPublic = ![];
            var S = new KJUR.crypto.ECDSA({
                "curve": V
            });
            S.setPublicKeyHex(l.ecpubhex);
            S.isPrivate = ![];
            S.isPublic = !![];
            var C = {};
            return C.prvKeyObj = L, C.pubKeyObj = S, C;
        } else throw "unknown algorithm: " + p;
    }
};

KEYUTIL.getPEM = function (L, S, Y, J, V, W) {
    var R = KJUR;
    var s = R.asn1;
    var I = s.DERObjectIdentifier;
    var K = s.DERInteger;
    var T = s.ASN1Util.newObject;
    var Z = s.x509;
    var M = Z.SubjectPublicKeyInfo;
    var U = R.crypto;
    var H = U.DSA;
    var O = U.ECDSA;
    var X = RSAKey;

    function G(pp) {
        var pn = T({
            "seq": [{
                "int": 0
            }, {
                "int": {
                    "bigint": pp.n
                }
            }, {
                "int": pp.e
            }, {
                "int": {
                    "bigint": pp.d
                }
            }, {
                "int": {
                    "bigint": pp.p
                }
            }, {
                "int": {
                    "bigint": pp.q
                }
            }, {
                "int": {
                    "bigint": pp.dmp1
                }
            }, {
                "int": {
                    "bigint": pp.dmq1
                }
            }, {
                "int": {
                    "bigint": pp.coeff
                }
            }]
        });
        return pn;
    }

    function N(pp) {
        var pn = T({
            "seq": [{
                "int": 1
            }, {
                "octstr": {
                    "hex": pp.prvKeyHex
                }
            }, {
                "tag": ["a0", !![], {
                    "oid": {
                        "name": pp.curveName
                    }
                }]
            }, {
                "tag": ["a1", !![], {
                    "bitstr": {
                        "hex": "00" + pp.pubKeyHex
                    }
                }]
            }]
        });
        return pn;
    }

    function Q(pp) {
        var pn = T({
            "seq": [{
                "int": 0
            }, {
                "int": {
                    "bigint": pp.p
                }
            }, {
                "int": {
                    "bigint": pp.q
                }
            }, {
                "int": {
                    "bigint": pp.g
                }
            }, {
                "int": {
                    "bigint": pp.y
                }
            }, {
                "int": {
                    "bigint": pp.x
                }
            }]
        });
        return pn;
    }

    if ((X !== undefined && L instanceof X || H !== undefined && L instanceof H || O !== undefined && L instanceof O) && L.isPublic == !![] && (S === undefined || S == "PKCS8PUB")) {
        var P = new M(L);
        var p0 = P.getEncodedHex();
        return hextopem(p0, "PUBLIC KEY");
    }

    if (S == "PKCS1PRV" && X !== undefined && L instanceof X && (Y === undefined || Y == null) && L.isPrivate == !![]) {
        var P = G(L);
        var p0 = P.getEncodedHex();
        return hextopem(p0, "RSA PRIVATE KEY");
    }

    if (S == "PKCS1PRV" && O !== undefined && L instanceof O && (Y === undefined || Y == null) && L.isPrivate == !![]) {
        var p1 = new I({
            "name": L.curveName
        });
        var p2 = p1.getEncodedHex();
        var p3 = N(L);
        var p4 = p3.getEncodedHex();
        var p5 = "";
        return p5 += hextopem(p2, "EC PARAMETERS"), p5 += hextopem(p4, "EC PRIVATE KEY"), p5;
    }

    if (S == "PKCS1PRV" && H !== undefined && L instanceof H && (Y === undefined || Y == null) && L.isPrivate == !![]) {
        var P = Q(L);
        var p0 = P.getEncodedHex();
        return hextopem(p0, "DSA PRIVATE KEY");
    }

    if (S == "PKCS5PRV" && X !== undefined && L instanceof X && Y !== undefined && Y != null && L.isPrivate == !![]) {
        var P = G(L);
        var p0 = P.getEncodedHex();
        return J === undefined && (J = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", p0, Y, J, W);
    }

    if (S == "PKCS5PRV" && O !== undefined && L instanceof O && Y !== undefined && Y != null && L.isPrivate == !![]) {
        var P = N(L);
        var p0 = P.getEncodedHex();
        return J === undefined && (J = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", p0, Y, J, W);
    }

    if (S == "PKCS5PRV" && H !== undefined && L instanceof H && Y !== undefined && Y != null && L.isPrivate == !![]) {
        var P = Q(L);
        var p0 = P.getEncodedHex();
        return J === undefined && (J = "DES-EDE3-CBC"), this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", p0, Y, J, W);
    }

    var p6 = function (pp, pn) {
        var pc = p7(pp, pn);
        var pa = new T({
            "seq": [{
                "seq": [{
                    "oid": {
                        "name": "pkcs5PBES2"
                    }
                }, {
                    "seq": [{
                        "seq": [{
                            "oid": {
                                "name": "pkcs5PBKDF2"
                            }
                        }, {
                            "seq": [{
                                "octstr": {
                                    "hex": pc.pbkdf2Salt
                                }
                            }, {
                                "int": pc.pbkdf2Iter
                            }]
                        }]
                    }, {
                        "seq": [{
                            "oid": {
                                "name": "des-EDE3-CBC"
                            }
                        }, {
                            "octstr": {
                                "hex": pc.encryptionSchemeIV
                            }
                        }]
                    }]
                }]
            }, {
                "octstr": {
                    "hex": pc.ciphertext
                }
            }]
        });
        return pa.getEncodedHex();
    };

    var p7 = function (pp, pn) {
        var pc = 100;
        var pa = CryptoJS.lib.WordArray.random(8);
        var pA = "DES-EDE3-CBC";
        var pL = CryptoJS.lib.WordArray.random(8);
        var pg = CryptoJS.PBKDF2(pn, pa, {
            "keySize": 6,
            "iterations": pc
        });
        var pS = CryptoJS.enc.Hex.parse(pp);
        var pf = CryptoJS.TripleDES.encrypt(pS, pg, {
            "iv": pL
        }) + "";
        var pY = {};
        return pY.ciphertext = pf, pY.pbkdf2Salt = CryptoJS.enc.Hex.stringify(pa), pY.pbkdf2Iter = pc, pY.encryptionSchemeAlg = pA, pY.encryptionSchemeIV = CryptoJS.enc.Hex.stringify(pL), pY;
    };

    if (S == "PKCS8PRV" && X != undefined && L instanceof X && L.isPrivate == !![]) {
        var p8 = G(L);
        var p9 = p8.getEncodedHex();
        var P = T({
            "seq": [{
                "int": 0
            }, {
                "seq": [{
                    "oid": {
                        "name": "rsaEncryption"
                    }
                }, {
                    "null": !![]
                }]
            }, {
                "octstr": {
                    "hex": p9
                }
            }]
        });
        var p0 = P.getEncodedHex();
        if (Y === undefined || Y == null) return hextopem(p0, "PRIVATE KEY");else {
            var p4 = p6(p0, Y);
            return hextopem(p4, "ENCRYPTED PRIVATE KEY");
        }
    }

    if (S == "PKCS8PRV" && O !== undefined && L instanceof O && L.isPrivate == !![]) {
        var p8 = new T({
            "seq": [{
                "int": 1
            }, {
                "octstr": {
                    "hex": L.prvKeyHex
                }
            }, {
                "tag": ["a1", !![], {
                    "bitstr": {
                        "hex": "00" + L.pubKeyHex
                    }
                }]
            }]
        });
        var p9 = p8.getEncodedHex();
        var P = T({
            "seq": [{
                "int": 0
            }, {
                "seq": [{
                    "oid": {
                        "name": "ecPublicKey"
                    }
                }, {
                    "oid": {
                        "name": L.curveName
                    }
                }]
            }, {
                "octstr": {
                    "hex": p9
                }
            }]
        });
        var p0 = P.getEncodedHex();
        if (Y === undefined || Y == null) return hextopem(p0, "PRIVATE KEY");else {
            var p4 = p6(p0, Y);
            return hextopem(p4, "ENCRYPTED PRIVATE KEY");
        }
    }

    if (S == "PKCS8PRV" && H !== undefined && L instanceof H && L.isPrivate == !![]) {
        var p8 = new K({
            "bigint": L.x
        });
        var p9 = p8.getEncodedHex();
        var P = T({
            "seq": [{
                "int": 0
            }, {
                "seq": [{
                    "oid": {
                        "name": "dsa"
                    }
                }, {
                    "seq": [{
                        "int": {
                            "bigint": L.p
                        }
                    }, {
                        "int": {
                            "bigint": L.q
                        }
                    }, {
                        "int": {
                            "bigint": L.g
                        }
                    }]
                }]
            }, {
                "octstr": {
                    "hex": p9
                }
            }]
        });
        var p0 = P.getEncodedHex();
        if (Y === undefined || Y == null) return hextopem(p0, "PRIVATE KEY");else {
            var p4 = p6(p0, Y);
            return hextopem(p4, "ENCRYPTED PRIVATE KEY");
        }
    }

    throw "unsupported object nor format";
};

KEYUTIL.getKeyFromCSRPEM = function (p) {
    var n = pemtohex(p, "CERTIFICATE REQUEST");
    var A = KEYUTIL.getKeyFromCSRHex(n);
    return A;
};

KEYUTIL.getKeyFromCSRHex = function (p) {
    var n = KEYUTIL.parseCSRHex(p);
    var A = KEYUTIL.getKey(n.p8pubkeyhex, null, "pkcs8pub");
    return A;
};

KEYUTIL.parseCSRHex = function (p) {
    var n = ASN1HEX;
    var A = n.getChildIdx;
    var L = n.getTLV;
    var S = {};
    var Y = p;
    if (Y.substr(0, 2) != "30") throw "malformed CSR(code:001)";
    var J = A(Y, 0);
    if (J.length < 1) throw "malformed CSR(code:002)";
    if (Y.substr(J[0], 2) != "30") throw "malformed CSR(code:003)";
    var C = A(Y, J[0]);
    if (C.length < 3) throw "malformed CSR(code:004)";
    return S.p8pubkeyhex = L(Y, C[2]), S;
};

KEYUTIL.getKeyID = function (p) {
    var n = KEYUTIL;
    var A = ASN1HEX;

    if (typeof p === "string" && p.indexOf("BEGIN ") != -1) {
        p = n.getKey(p);
    }

    var L = pemtohex(n.getPEM(p));
    var g = A.getIdxbyList(L, 0, [1]);
    var S = A.getV(L, g).substring(2);
    return KJUR.crypto.Util.hashHex(S, "sha1");
};

KEYUTIL.getJWKFromKey = function (p) {
    var n = {};
    if (p instanceof RSAKey && p.isPrivate) return n.kty = "RSA", n.n = hextob64u(p.n.toString(16)), n.e = hextob64u(p.e.toString(16)), n.d = hextob64u(p.d.toString(16)), n.p = hextob64u(p.p.toString(16)), n.q = hextob64u(p.q.toString(16)), n.dp = hextob64u(p.dmp1.toString(16)), n.dq = hextob64u(p.dmq1.toString(16)), n.qi = hextob64u(p.coeff.toString(16)), n;else {
        if (p instanceof RSAKey && p.isPublic) return n.kty = "RSA", n.n = hextob64u(p.n.toString(16)), n.e = hextob64u(p.e.toString(16)), n;else {
            if (p instanceof KJUR.crypto.ECDSA && p.isPrivate) {
                var A = p.getShortNISTPCurveName();
                if (A !== "P-256" && A !== "P-384") throw "unsupported curve name for JWT: " + A;
                var L = p.getPublicKeyXYHex();
                return n.kty = "EC", n.crv = A, n.x = hextob64u(L.x), n.y = hextob64u(L.y), n.d = hextob64u(p.prvKeyHex), n;
            } else {
                if (p instanceof KJUR.crypto.ECDSA && p.isPublic) {
                    var A = p.getShortNISTPCurveName();
                    if (A !== "P-256" && A !== "P-384") throw "unsupported curve name for JWT: " + A;
                    var L = p.getPublicKeyXYHex();
                    return n.kty = "EC", n.crv = A, n.x = hextob64u(L.x), n.y = hextob64u(L.y), n;
                }
            }
        }
    }
    throw "not supported key object";
};

RSAKey.getPosArrayOfChildrenFromHex = function (p) {
    return ASN1HEX.getChildIdx(p, 0);
};

RSAKey.getHexValueArrayOfChildrenFromHex = function (p) {
    var a = ASN1HEX;
    var A = a.getV;
    var L = RSAKey.getPosArrayOfChildrenFromHex(p);
    var S = A(p, L[0]);
    var Y = A(p, L[1]);
    var J = A(p, L[2]);
    var C = A(p, L[3]);
    var V = A(p, L[4]);
    var W = A(p, L[5]);
    var R = A(p, L[6]);
    var B = A(p, L[7]);
    var F = A(p, L[8]);
    var L = new Array();
    return L.push(S, Y, J, C, V, W, R, B, F), L;
};

RSAKey.prototype.readPrivateKeyFromPEMString = function (p) {
    var n = pemtohex(p);
    var a = RSAKey.getHexValueArrayOfChildrenFromHex(n);
    this.setPrivateEx(a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
};

RSAKey.prototype.readPKCS5PrvKeyHex = function (p) {
    var n = RSAKey.getHexValueArrayOfChildrenFromHex(p);
    this.setPrivateEx(n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8]);
};

RSAKey.prototype.readPKCS8PrvKeyHex = function (p) {
    var n;
    var A;
    var L;
    var S;
    var Y;
    var J;
    var C;
    var V;
    var W = ASN1HEX;
    var R = W.getVbyList;
    if (W.isASN1HEX(p) === ![]) throw "not ASN.1 hex string";

    try {
        n = R(p, 0, [2, 0, 1], "02");
        A = R(p, 0, [2, 0, 2], "02");
        L = R(p, 0, [2, 0, 3], "02");
        S = R(p, 0, [2, 0, 4], "02");
        Y = R(p, 0, [2, 0, 5], "02");
        J = R(p, 0, [2, 0, 6], "02");
        C = R(p, 0, [2, 0, 7], "02");
        V = R(p, 0, [2, 0, 8], "02");
    } catch (B) {
        console.log(B);
        throw "malformed PKCS#8 plain RSA private key";
    }

    this.setPrivateEx(n, A, L, S, Y, J, C, V);
};

RSAKey.prototype.readPKCS5PubKeyHex = function (p) {
    var n = ASN1HEX;
    var A = n.getV;
    if (n.isASN1HEX(p) === ![]) throw "keyHex is not ASN.1 hex string";
    var L = n.getChildIdx(p, 0);
    if (L.length !== 2 || p.substr(L[0], 2) !== "02" || p.substr(L[1], 2) !== "02") throw "wrong hex for PKCS#5 public key";
    var g = A(p, L[0]);
    var S = A(p, L[1]);
    this.setPublic(g, S);
};

RSAKey.prototype.readPKCS8PubKeyHex = function (p) {
    var n = ASN1HEX;
    if (n.isASN1HEX(p) === ![]) throw "not ASN.1 hex string";
    if (n.getTLVbyList(p, 0, [0, 0]) !== "06092a864886f70d010101") throw "not PKCS8 RSA public key";
    var A = n.getTLVbyList(p, 0, [1, 0]);
    this.readPKCS5PubKeyHex(A);
};

RSAKey.prototype.readCertPubKeyHex = function (p, n) {
    var A;
    var L;
    A = new X509();
    A.readCertHex(p);
    L = A.getPublicKeyHex();
    this.readPKCS8PubKeyHex(L);
};

var _RE_HEXDECONLY = new RegExp("[^0-9a-f]", "gi");

function _rsasign_getHexPaddedDigestInfoForString(p, n, A) {
    var L = function (S) {
        return KJUR.crypto.Util.hashString(S, A);
    };

    var g = L(p);
    return KJUR.crypto.Util.getPaddedDigestInfoHex(g, A, n);
}

function _zeroPaddingOfSignature(p, n) {
    var A = "";
    var L = n / 4 - p.length;

    for (var g = 0; g < L; g++) {
        A = A + "0";
    }

    return A + p;
}

RSAKey.prototype.sign = function (p, n) {
    var A = function (g) {
        return KJUR.crypto.Util.hashString(g, n);
    };

    var L = A(p);
    return this.signWithMessageHash(L, n);
};

RSAKey.prototype.signWithMessageHash = function (p, n) {
    var A = KJUR.crypto.Util.getPaddedDigestInfoHex(p, n, this.n.bitLength());
    var L = parseBigInt(A, 16);
    var g = this.doPrivate(L);
    var S = g.toString(16);
    return _zeroPaddingOfSignature(S, this.n.bitLength());
};

function pss_mgf1_str(p, n, A) {
    var L = "";
    var g = 0;

    while (L.length < n) {
        L += hextorstr(A(rstrtohex(p + String.fromCharCode.apply(String, [(g & 4278190080) >> 24, (g & 16711680) >> 16, (g & 65280) >> 8, g & 255]))));
        g += 1;
    }

    return L;
}

RSAKey.prototype.signPSS = function (p, n, A) {
    var L = function (S) {
        return KJUR.crypto.Util.hashHex(S, n);
    };

    var g = L(rstrtohex(p));
    return A === undefined && (A = -1), this.signWithMessageHashPSS(g, n, A);
};

RSAKey.prototype.signWithMessageHashPSS = function (A, L, S) {
    var Y = hextorstr(A);
    var J = Y.length;
    var C = this.n.bitLength() - 1;
    var V = Math.ceil(C / 8);
    var W;

    var R = function (Z) {
        return KJUR.crypto.Util.hashHex(Z, L);
    };

    if (S === -1 || S === undefined) S = J;else {
        if (S === -2) S = V - J - 2;else {
            if (S < -2) throw "invalid salt length";
        }
    }
    if (V < J + S + 2) throw "data too long";
    var B = "";

    if (S > 0) {
        B = new Array(S);
        new SecureRandom().nextBytes(B);
        B = String.fromCharCode.apply(String, B);
    }

    var F = hextorstr(R(rstrtohex("\0\0\0\0\0\0\0\0" + Y + B)));
    var E = [];

    for (W = 0; W < V - S - J - 2; W += 1) {
        E[W] = 0;
    }

    var s = String.fromCharCode.apply(String, E) + "" + B;
    var I = pss_mgf1_str(F, s.length, R);
    var K = [];

    for (W = 0; W < s.length; W += 1) {
        K[W] = s.charCodeAt(W) ^ I.charCodeAt(W);
    }

    var T = 65280 >> 8 * V - C & 255;
    K[0] &= ~T;

    for (W = 0; W < J; W++) {
        K.push(F.charCodeAt(W));
    }

    return K.push(188), _zeroPaddingOfSignature(this.doPrivate(new BigInteger(K)).toString(16), this.n.bitLength());
};

function _rsasign_getDecryptSignatureBI(p, n, A) {
    var L = new RSAKey();
    L.setPublic(n, A);
    var g = L.doPublic(p);
    return g;
}

function _rsasign_getHexDigestInfoFromSig(p, n, A) {
    var L = _rsasign_getDecryptSignatureBI(p, n, A);

    var g = L.toString(16).replace(/^1f+00/, "");
    return g;
}

function _rsasign_getAlgNameAndHashFromHexDisgestInfo(p) {
    for (var n in KJUR.crypto.Util.DIGESTINFOHEAD) {
        var a = KJUR.crypto.Util.DIGESTINFOHEAD[n];
        var A = a.length;

        if (p.substring(0, A) == a) {
            var L = [n, p.substring(A)];
            return L;
        }
    }

    return [];
}

RSAKey.prototype.verify = function (p, n) {
    n = n.replace(_RE_HEXDECONLY, "");
    n = n.replace(/[ \n]+/g, "");
    var A = parseBigInt(n, 16);
    if (A.bitLength() > this.n.bitLength()) return 0;
    var L = this.doPublic(A);
    var S = L.toString(16).replace(/^1f+00/, "");

    var Y = _rsasign_getAlgNameAndHashFromHexDisgestInfo(S);

    if (Y.length == 0) return ![];
    var J = Y[0];
    var C = Y[1];

    var V = function (l) {
        return KJUR.crypto.Util.hashString(l, J);
    };

    var W = V(p);
    return C == W;
};

RSAKey.prototype.verifyWithMessageHash = function (p, n) {
    if (n.length != Math.ceil(this.n.bitLength() / 4)) return ![];
    var A = parseBigInt(n, 16);
    if (A.bitLength() > this.n.bitLength()) return 0;
    var L = this.doPublic(A);
    var S = L.toString(16).replace(/^1f+00/, "");

    var Y = _rsasign_getAlgNameAndHashFromHexDisgestInfo(S);

    if (Y.length == 0) return ![];
    var J = Y[0];
    var C = Y[1];
    return C == p;
};

RSAKey.prototype.verifyPSS = function (p, n, A, L) {
    var g = function (Y) {
        return KJUR.crypto.Util.hashHex(Y, A);
    };

    var S = g(rstrtohex(p));
    return L === undefined && (L = -1), this.verifyWithMessageHashPSS(S, n, A, L);
};

RSAKey.prototype.verifyWithMessageHashPSS = function (A, L, S, Y) {
    if (L.length != Math.ceil(this.n.bitLength() / 4)) return ![];
    var J = new BigInteger(L, 16);

    var C = function (M) {
        return KJUR.crypto.Util.hashHex(M, S);
    };

    var V = hextorstr(A);
    var W = V.length;
    var R = this.n.bitLength() - 1;
    var B = Math.ceil(R / 8);
    var F;
    if (Y === -1 || Y === undefined) Y = W;else {
        if (Y === -2) Y = B - W - 2;else {
            if (Y < -2) throw "invalid salt length";
        }
    }
    if (B < W + Y + 2) throw "data too long";
    var E = this.doPublic(J).toByteArray();

    for (F = 0; F < E.length; F += 1) {
        E[F] &= 255;
    }

    while (E.length < B) {
        E.unshift(0);
    }

    if (E[B - 1] !== 188) throw "encoded message does not end in 0xbc";
    E = String.fromCharCode.apply(String, E);
    var I = E.substr(0, B - W - 1);
    var K = E.substr(I.length, W);
    var T = 65280 >> 8 * B - R & 255;
    if ((I.charCodeAt(0) & T) !== 0) throw "bits beyond keysize not zero";
    var i = pss_mgf1_str(K, I.length, C);
    var Z = [];

    for (F = 0; F < I.length; F += 1) {
        Z[F] = I.charCodeAt(F) ^ i.charCodeAt(F);
    }

    Z[0] &= ~T;
    var w = B - W - Y - 2;

    for (F = 0; F < w; F += 1) {
        if (Z[F] !== 0) throw "leftmost octets not zero";
    }

    if (Z[w] !== 1) throw "0x01 marker not found";
    return K === hextorstr(C(rstrtohex("\0\0\0\0\0\0\0\0" + V + String.fromCharCode.apply(String, Z.slice(-Y)))));
};

RSAKey.SALT_LEN_HLEN = -1;
RSAKey.SALT_LEN_MAX = -2;
RSAKey.SALT_LEN_RECOVER = -2;

function X509() {
    var p = ASN1HEX;
    var n = p.getChildIdx;
    var A = p.getV;
    var L = p.getTLV;
    var S = p.getVbyList;
    var Y = p.getTLVbyList;
    var J = p.getIdxbyList;
    var C = p.getVidx;
    var V = p.oidname;
    var W = X509;
    var l = pemtohex;
    this.hex = null;
    this.version = 0;
    this.foffset = 0;
    this.aExtInfo = null;

    this.getVersion = function () {
        if (this.hex === null || this.version !== 0) return this.version;
        if (Y(this.hex, 0, [0, 0]) !== "a003020102") return this.version = 1, this.foffset = -1, 1;
        return this.version = 3, 3;
    };

    this.getSerialNumberHex = function () {
        return S(this.hex, 0, [0, 1 + this.foffset], "02");
    };

    this.getSignatureAlgorithmField = function () {
        return V(S(this.hex, 0, [0, 2 + this.foffset, 0], "06"));
    };

    this.getIssuerHex = function () {
        return Y(this.hex, 0, [0, 3 + this.foffset], "30");
    };

    this.getIssuerString = function () {
        return W.hex2dn(this.getIssuerHex());
    };

    this.getSubjectHex = function () {
        return Y(this.hex, 0, [0, 5 + this.foffset], "30");
    };

    this.getSubjectString = function () {
        return W.hex2dn(this.getSubjectHex());
    };

    this.getNotBefore = function () {
        var R = S(this.hex, 0, [0, 4 + this.foffset, 0]);
        return R = R.replace(/(..)/g, "%$1"), R = decodeURIComponent(R), R;
    };

    this.getNotAfter = function () {
        var R = S(this.hex, 0, [0, 4 + this.foffset, 1]);
        return R = R.replace(/(..)/g, "%$1"), R = decodeURIComponent(R), R;
    };

    this.getPublicKeyHex = function () {
        return p.getTLVbyList(this.hex, 0, [0, 6 + this.foffset], "30");
    };

    this.getPublicKeyIdx = function () {
        return J(this.hex, 0, [0, 6 + this.foffset], "30");
    };

    this.getPublicKeyContentIdx = function () {
        var R = this.getPublicKeyIdx();
        return J(this.hex, R, [1, 0], "30");
    };

    this.getPublicKey = function () {
        return KEYUTIL.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
    };

    this.getSignatureAlgorithmName = function () {
        return V(S(this.hex, 0, [1, 0], "06"));
    };

    this.getSignatureValueHex = function () {
        return S(this.hex, 0, [2], "03", !![]);
    };

    this.verifySignature = function (R) {
        var B = this.getSignatureAlgorithmName();
        var F = this.getSignatureValueHex();
        var E = Y(this.hex, 0, [0], "30");
        var s = new KJUR.crypto.Signature({
            "alg": B
        });
        return s.init(R), s.updateHex(E), s.verify(F);
    };

    this.parseExt = function (R) {
        var B;
        var F;
        var E;

        if (R === undefined) {
            E = this.hex;
            if (this.version !== 3) return -1;
            B = J(E, 0, [0, 7, 0], "30");
            F = n(E, B);
        } else {
            E = pemtohex(R);
            var I = J(E, 0, [0, 3, 0, 0], "06");

            if (A(E, I) != "2a864886f70d01090e") {
                this.aExtInfo = new Array();
                return;
            }

            B = J(E, 0, [0, 3, 0, 1, 0], "30");
            F = n(E, B);
            this.hex = E;
        }

        this.aExtInfo = new Array();

        for (var K = 0; K < F.length; K++) {
            var T = {};
            T.critical = ![];
            var Z = n(E, F[K]);
            var w = 0;

            if (Z.length === 3) {
                T.critical = !![];
                w = 1;
            }

            T.oid = p.hextooidstr(S(E, F[K], [0], "06"));
            var M = J(E, F[K], [1 + w]);
            T.vidx = C(E, M);
            this.aExtInfo.push(T);
        }
    };

    this.getExtInfo = function (R) {
        var B = this.aExtInfo;
        var F = R;

        if (!R.match(/^[0-9.]+$/)) {
            F = KJUR.asn1.x509.OID.name2oid(R);
        }

        if (F === "") return undefined;

        for (var E = 0; E < B.length; E++) {
            if (B[E].oid === F) return B[E];
        }

        return undefined;
    };

    this.getExtBasicConstraints = function () {
        var R = this.getExtInfo("basicConstraints");
        if (R === undefined) return R;
        var B = A(this.hex, R.vidx);
        if (B === "") return {};
        if (B === "0101ff") return {
            "cA": !![]
        };

        if (B.substr(0, 8) === "0101ff02") {
            var F = A(B, 6);
            var E = parseInt(F, 16);
            return {
                "cA": !![],
                "pathLen": E
            };
        }

        throw "basicConstraints parse error";
    };

    this.getExtKeyUsageBin = function () {
        var R = this.getExtInfo("keyUsage");
        if (R === undefined) return "";
        var B = A(this.hex, R.vidx);
        if (B.length % 2 != 0 || B.length <= 2) throw "malformed key usage value";
        var F = parseInt(B.substr(0, 2));
        var E = parseInt(B.substr(2), 16).toString(2);
        return E.substr(0, E.length - F);
    };

    this.getExtKeyUsageString = function () {
        var R = this.getExtKeyUsageBin();
        var B = new Array();

        for (var F = 0; F < R.length; F++) {
            if (R.substr(F, 1) == "1") {
                B.push(X509.KEYUSAGE_NAME[F]);
            }
        }

        return B.join(",");
    };

    this.getExtSubjectKeyIdentifier = function () {
        var R = this.getExtInfo("subjectKeyIdentifier");
        if (R === undefined) return R;
        return A(this.hex, R.vidx);
    };

    this.getExtAuthorityKeyIdentifier = function () {
        var R = this.getExtInfo("authorityKeyIdentifier");
        if (R === undefined) return R;
        var B = {};
        var F = L(this.hex, R.vidx);
        var E = n(F, 0);

        for (var s = 0; s < E.length; s++) {
            if (F.substr(E[s], 2) === "80") {
                B.kid = A(F, E[s]);
            }
        }

        return B;
    };

    this.getExtExtKeyUsageName = function () {
        var R = this.getExtInfo("extKeyUsage");
        if (R === undefined) return R;
        var B = new Array();
        var F = L(this.hex, R.vidx);
        if (F === "") return B;
        var E = n(F, 0);

        for (var s = 0; s < E.length; s++) {
            B.push(V(A(F, E[s])));
        }

        return B;
    };

    this.getExtSubjectAltName = function () {
        var R = this.getExtSubjectAltName2();
        var B = new Array();

        for (var F = 0; F < R.length; F++) {
            if (R[F][0] === "DNS") {
                B.push(R[F][1]);
            }
        }

        return B;
    };

    this.getExtSubjectAltName2 = function () {
        var R;
        var B;
        var F;
        var E = this.getExtInfo("subjectAltName");
        if (E === undefined) return E;
        var I = new Array();
        var K = L(this.hex, E.vidx);
        var T = n(K, 0);

        for (var Z = 0; Z < T.length; Z++) {
            F = K.substr(T[Z], 2);
            R = A(K, T[Z]);
            F === "81" && (B = hextoutf8(R), I.push(["MAIL", B]));
            F === "82" && (B = hextoutf8(R), I.push(["DNS", B]));
            F === "84" && (B = X509.hex2dn(R, 0), I.push(["DN", B]));
            F === "86" && (B = hextoutf8(R), I.push(["URI", B]));
            F === "87" && (B = hextoip(R), I.push(["IP", B]));
        }

        return I;
    };

    this.getExtCRLDistributionPointsURI = function () {
        var R = this.getExtInfo("cRLDistributionPoints");
        if (R === undefined) return R;
        var B = new Array();
        var F = n(this.hex, R.vidx);

        for (var E = 0; E < F.length; E++) {
            try {
                var s = S(this.hex, F[E], [0, 0, 0], "86");
                var I = hextoutf8(s);
                B.push(I);
            } catch (K) {
                console.log(K);
            }
        }

        return B;
    };

    this.getExtAIAInfo = function () {
        var R = this.getExtInfo("authorityInfoAccess");
        if (R === undefined) return R;
        var B = {
            "ocsp": [],
            "caissuer": []
        };
        var F = n(this.hex, R.vidx);

        for (var E = 0; E < F.length; E++) {
            var s = S(this.hex, F[E], [0], "06");
            var I = S(this.hex, F[E], [1], "86");
            s === "2b06010505073001" && B.ocsp.push(hextoutf8(I));
            s === "2b06010505073002" && B.caissuer.push(hextoutf8(I));
        }

        return B;
    };

    this.getExtCertificatePolicies = function () {
        var R = this.getExtInfo("certificatePolicies");
        if (R === undefined) return R;
        var B = L(this.hex, R.vidx);
        var F = [];
        var E = n(B, 0);

        for (var I = 0; I < E.length; I++) {
            var K = {};
            var T = n(B, E[I]);
            K.id = V(A(B, T[0]));

            if (T.length === 2) {
                var Z = n(B, T[1]);

                for (var w = 0; w < Z.length; w++) {
                    var M = S(B, Z[w], [0], "06");

                    if (M === "2b06010505070201") {
                        K.cps = hextoutf8(S(B, Z[w], [1]));
                    } else {
                        if (M === "2b06010505070202") {
                            K.unotice = hextoutf8(S(B, Z[w], [1, 0]));
                        }
                    }
                }
            }

            F.push(K);
        }

        return F;
    };

    this.readCertPEM = function (R) {
        this.readCertHex(l(R));
    };

    this.readCertHex = function (R) {
        this.hex = R;
        this.getVersion();

        try {
            J(this.hex, 0, [0, 7], "a3");
            this.parseExt();
        } catch (B) {
            console.log(B);
        }
    };

    this.getInfo = function () {
        var R = X509;
        var F;
        var E;
        var s;
        F = "Basic Fields\n";
        F += "  serial number: " + this.getSerialNumberHex() + "\n";
        F += "  signature algorithm: " + this.getSignatureAlgorithmField() + "\n";
        F += "  issuer: " + this.getIssuerString() + "\n";
        F += "  notBefore: " + this.getNotBefore() + "\n";
        F += "  notAfter: " + this.getNotAfter() + "\n";
        F += "  subject: " + this.getSubjectString() + "\n";
        F += "  subject public key info: \n";
        E = this.getPublicKey();
        F += "    key algorithm: " + E.type + "\n";

        if (E.type === "RSA") {
            F += "    n=" + hextoposhex(E.n.toString(16)).substr(0, 16) + "...\n";
            F += "    e=" + hextoposhex(E.e.toString(16)) + "\n";
        }

        s = this.aExtInfo;

        if (s !== undefined && s !== null) {
            F += "X509v3 Extensions:\n";

            for (var I = 0; I < s.length; I++) {
                var K = s[I];
                var T = KJUR.asn1.x509.OID.oid2name(K.oid);

                if (T === "") {
                    T = K.oid;
                }

                var Z = "";

                if (K.critical === !![]) {
                    Z = "CRITICAL";
                }

                F += "  " + T + " " + Z + ":\n";

                if (T === "basicConstraints") {
                    var M = this.getExtBasicConstraints();

                    if (M.cA === undefined) {
                        F += "    {}\n";
                    } else {
                        F += "    cA=true";
                        M.pathLen !== undefined && (F += ", pathLen=" + M.pathLen);
                        F += "\n";
                    }
                } else {
                    if (T === "keyUsage") F += "    " + this.getExtKeyUsageString() + "\n";else {
                        if (T === "subjectKeyIdentifier") F += "    " + this.getExtSubjectKeyIdentifier() + "\n";else {
                            if (T === "authorityKeyIdentifier") {
                                var U = this.getExtAuthorityKeyIdentifier();

                                if (U.kid !== undefined) {
                                    F += "    kid=" + U.kid + "\n";
                                }
                            } else {
                                if (T === "extKeyUsage") {
                                    var H = this.getExtExtKeyUsageName();
                                    F += "    " + H.join(", ") + "\n";
                                } else {
                                    if (T === "subjectAltName") {
                                        var O = this.getExtSubjectAltName2();
                                        F += "    " + O + "\n";
                                    } else {
                                        if (T === "cRLDistributionPoints") {
                                            var X = this.getExtCRLDistributionPointsURI();
                                            F += "    " + X + "\n";
                                        } else {
                                            if (T === "authorityInfoAccess") {
                                                var G = this.getExtAIAInfo();
                                                G.ocsp !== undefined && (F += "    ocsp: " + G.ocsp.join(",") + "\n");
                                                G.caissuer !== undefined && (F += "    caissuer: " + G.caissuer.join(",") + "\n");
                                            } else {
                                                if (T === "certificatePolicies") {
                                                    var N = this.getExtCertificatePolicies();

                                                    for (var D = 0; D < N.length; D++) {
                                                        N[D].id !== undefined && (F += "    policy oid: " + N[D].id + "\n");
                                                        N[D].cps !== undefined && (F += "    cps: " + N[D].cps + "\n");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return F += "signature algorithm: " + this.getSignatureAlgorithmName() + "\n", F += "signature: " + this.getSignatureValueHex().substr(0, 16) + "...\n", F;
    };
}

X509.hex2dn = function (p, n) {
    if (n === undefined) {
        n = 0;
    }

    if (p.substr(n, 2) !== "30") throw "malformed DN";
    var a = new Array();
    var A = ASN1HEX.getChildIdx(p, n);

    for (var L = 0; L < A.length; L++) {
        a.push(X509.hex2rdn(p, A[L]));
    }

    return a = a.map(function (g) {
        return g.replace("/", "\\/");
    }), "/" + a.join("/");
};

X509.hex2rdn = function (p, n) {
    if (n === undefined) {
        n = 0;
    }

    if (p.substr(n, 2) !== "31") throw "malformed RDN";
    var a = new Array();
    var A = ASN1HEX.getChildIdx(p, n);

    for (var L = 0; L < A.length; L++) {
        a.push(X509.hex2attrTypeValue(p, A[L]));
    }

    return a = a.map(function (g) {
        return g.replace("+", "\\+");
    }), a.join("+");
};

X509.hex2attrTypeValue = function (p, n) {
    var A = ASN1HEX;
    var L = A.getV;

    if (n === undefined) {
        n = 0;
    }

    if (p.substr(n, 2) !== "30") throw "malformed attribute type and value";
    var S = A.getChildIdx(p, n);

    if (S.length !== 2 || p.substr(S[0], 2) !== "06") {
        "malformed attribute type and value";
    }

    var Y = L(p, S[0]);
    var J = KJUR.asn1.ASN1Util.oidHexToInt(Y);
    var C = KJUR.asn1.x509.OID.oid2atype(J);
    var V = L(p, S[1]);
    var W = hextorstr(V);
    return C + "=" + W;
};

X509.getPublicKeyFromCertHex = function (p) {
    var n = new X509();
    return n.readCertHex(p), n.getPublicKey();
};

X509.getPublicKeyFromCertPEM = function (p) {
    var n = new X509();
    return n.readCertPEM(p), n.getPublicKey();
};

X509.getPublicKeyInfoPropOfCertPEM = function (p) {
    var n = ASN1HEX;
    var A = n.getVbyList;
    var L = {};
    var S;
    var Y;
    var J;
    return L.algparam = null, S = new X509(), S.readCertPEM(p), Y = S.getPublicKeyHex(), L.keyhex = A(Y, 0, [1], "03").substr(2), L.algoid = A(Y, 0, [0, 0], "06"), L.algoid === "2a8648ce3d0201" && (L.algparam = A(Y, 0, [0, 1], "06")), L;
};

X509.KEYUSAGE_NAME = ["digitalSignature", "nonRepudiation", "keyEncipherment", "dataEncipherment", "keyAgreement", "keyCertSign", "cRLSign", "encipherOnly", "decipherOnly"];

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.jws == "undefined" || !KJUR.jws) {
    KJUR.jws = {};
}

KJUR.jws.JWS = function () {
    var p = KJUR;
    var n = p.jws.JWS;
    var A = n.isSafeJSONString;

    this.parseJWS = function (L, S) {
        if (this.parsedJWS !== undefined && (S || this.parsedJWS.sigvalH !== undefined)) return;
        var Y = L.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
        if (Y == null) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
        var J = Y[1];
        var C = Y[2];
        var V = Y[3];
        var W = J + "." + C;
        this.parsedJWS = {};
        this.parsedJWS.headB64U = J;
        this.parsedJWS.payloadB64U = C;
        this.parsedJWS.sigvalB64U = V;
        this.parsedJWS.si = W;

        if (!S) {
            var R = b64utohex(V);
            var B = parseBigInt(R, 16);
            this.parsedJWS.sigvalH = R;
            this.parsedJWS.sigvalBI = B;
        }

        var F = b64utoutf8(J);
        var E = b64utoutf8(C);
        this.parsedJWS.headS = F;
        this.parsedJWS.payloadS = E;
        if (!A(F, this.parsedJWS, "headP")) throw "malformed JSON string for JWS Head: " + F;
    };
};

KJUR.jws.JWS.sign = function (L, S, Y, J, C) {
    var V = KJUR;
    var W = V.jws;
    var R = W.JWS;
    var B = R.readSafeJSONString;
    var F = R.isSafeJSONString;
    var E = V.crypto;
    var I = E.ECDSA;
    var K = E.Mac;
    var T = E.Signature;
    var Z = JSON;
    var M;
    var U;
    var H;
    if (typeof S != "string" && typeof S != "object") throw "spHeader must be JSON string or object: " + S;

    if (typeof S == "object") {
        U = S;
        M = Z.stringify(U);
    }

    if (typeof S == "string") {
        M = S;
        if (!F(M)) throw "JWS Head is not safe JSON string: " + M;
        U = B(M);
    }

    H = Y;

    if (typeof Y == "object") {
        H = Z.stringify(Y);
    }

    if ((L == "" || L == null) && U.alg !== undefined) {
        L = U.alg;
    }

    if (L != "" && L != null && U.alg === undefined) {
        U.alg = L;
        M = Z.stringify(U);
    }

    if (L !== U.alg) throw "alg and sHeader.alg doesn't match: " + L + "!=" + U.alg;
    var O = null;
    if (R.jwsalg2sigalg[L] === undefined) throw "unsupported alg name: " + L;else O = R.jwsalg2sigalg[L];
    var X = utf8tob64u(M);
    var G = utf8tob64u(H);
    var N = X + "." + G;
    var D = "";

    if (O.substr(0, 4) == "Hmac") {
        if (J === undefined) throw "mac key shall be specified for HS* alg";
        var Q = new K({
            "alg": O,
            "prov": "cryptojs",
            "pass": J
        });
        Q.updateString(N);
        D = Q.doFinal();
    } else {
        if (O.indexOf("withECDSA") != -1) {
            var P = new T({
                "alg": O
            });
            P.init(J, C);
            P.updateString(N);
            var p0 = P.sign();
            D = KJUR.crypto.ECDSA.asn1SigToConcatSig(p0);
        } else {
            if (O != "none") {
                var P = new T({
                    "alg": O
                });
                P.init(J, C);
                P.updateString(N);
                D = P.sign();
            }
        }
    }

    var p1 = hextob64u(D);
    return N + "." + p1;
};

KJUR.jws.JWS.verify = function (a, L, S) {
    var Y = KJUR;
    var J = Y.jws;
    var C = J.JWS;
    var V = C.readSafeJSONString;
    var W = Y.crypto;
    var R = W.ECDSA;
    var F = W.Mac;
    var E = W.Signature;
    var I;

    if (typeof RSAKey !== undefined) {
        I = RSAKey;
    }

    var K = a.split(".");
    if (K.length !== 3) return ![];
    var T = K[0];
    var Z = K[1];
    var M = T + "." + Z;
    var U = b64utohex(K[2]);
    var H = V(b64utoutf8(K[0]));
    var O = null;
    var X = null;
    if (H.alg === undefined) throw "algorithm not specified in header";else {
        O = H.alg;
        X = O.substr(0, 2);
    }

    if (S != null && Object.prototype.toString.call(S) === "[object Array]" && S.length > 0) {
        var G = ":" + S.join(":") + ":";
        if (G.indexOf(":" + O + ":") == -1) throw "algorithm '" + O + "' not accepted in the list";
    }

    if (O != "none" && L === null) throw "key shall be specified to verify.";

    if (typeof L == "string" && L.indexOf("-----BEGIN ") != -1) {
        L = KEYUTIL.getKey(L);
    }

    if (X == "RS" || X == "PS") {
        if (!(L instanceof I)) throw "key shall be a RSAKey obj for RS* and PS* algs";
    }

    if (X == "ES") {
        if (!(L instanceof R)) throw "key shall be a ECDSA obj for ES* algs";
    }

    if (O == "none") {}

    var N = null;
    if (C.jwsalg2sigalg[H.alg] === undefined) throw "unsupported alg name: " + O;else N = C.jwsalg2sigalg[O];
    if (N == "none") throw "not supported";else {
        if (N.substr(0, 4) == "Hmac") {
            var D = null;
            if (L === undefined) throw "hexadecimal key shall be specified for HMAC";
            var Q = new F({
                "alg": N,
                "pass": L
            });
            return Q.updateString(M), D = Q.doFinal(), U == D;
        } else {
            if (N.indexOf("withECDSA") != -1) {
                var P = null;

                try {
                    P = R.concatSigToASN1Sig(U);
                } catch (p1) {
                    console.log(p1);
                    return ![];
                }

                var p0 = new E({
                    "alg": N
                });
                return p0.init(L), p0.updateString(M), p0.verify(P);
            } else {
                var p0 = new E({
                    "alg": N
                });
                return p0.init(L), p0.updateString(M), p0.verify(U);
            }
        }
    }
};

KJUR.jws.JWS.parse = function (p) {
    var n = p.split(".");
    var a = {};
    var A;
    var L;
    var S;
    if (n.length != 2 && n.length != 3) throw "malformed sJWS: wrong number of '.' splitted elements";
    return A = n[0], L = n[1], n.length == 3 && (S = n[2]), a.headerObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(A)), a.payloadObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(L)), a.headerPP = JSON.stringify(a.headerObj, null, "  "), a.payloadObj == null ? a.payloadPP = b64utoutf8(L) : a.payloadPP = JSON.stringify(a.payloadObj, null, "  "), S !== undefined && (a.sigHex = b64utohex(S)), a;
};

KJUR.jws.JWS.verifyJWT = function (a, A, L) {
    var S = KJUR;
    var Y = S.jws;
    var J = Y.JWS;
    var C = J.readSafeJSONString;
    var V = J.inArray;
    var W = J.includedArray;
    var R = a.split(".");
    var B = R[0];
    var F = R[1];
    var E = B + "." + F;
    var s = b64utohex(R[2]);
    var I = C(b64utoutf8(B));
    var K = C(b64utoutf8(F));
    if (I.alg === undefined) return ![];
    if (L.alg === undefined) throw "acceptField.alg shall be specified";
    if (!V(I.alg, L.alg)) return ![];

    if (K.iss !== undefined && typeof L.iss === "object") {
        if (!V(K.iss, L.iss)) return ![];
    }

    if (K.sub !== undefined && typeof L.sub === "object") {
        if (!V(K.sub, L.sub)) return ![];
    }

    if (K.aud !== undefined && typeof L.aud === "object") {
        if (typeof K.aud == "string") {
            if (!V(K.aud, L.aud)) return ![];
        } else {
            if (typeof K.aud == "object") {
                if (!W(K.aud, L.aud)) return ![];
            }
        }
    }

    var T = Y.IntDate.getNow();

    if (L.verifyAt !== undefined && typeof L.verifyAt === "number") {
        T = L.verifyAt;
    }

    if (L.gracePeriod === undefined || typeof L.gracePeriod !== "number") {
        L.gracePeriod = 0;
    }

    if (K.exp !== undefined && typeof K.exp == "number") {
        if (K.exp + L.gracePeriod < T) return ![];
    }

    if (K.nbf !== undefined && typeof K.nbf == "number") {
        if (T < K.nbf - L.gracePeriod) return ![];
    }

    if (K.iat !== undefined && typeof K.iat == "number") {
        if (T < K.iat - L.gracePeriod) return ![];
    }

    if (K.jti !== undefined && L.jti !== undefined) {
        if (K.jti !== L.jti) return ![];
    }

    if (!J.verify(a, A, L.alg)) return ![];
    return !![];
};

KJUR.jws.JWS.includedArray = function (p, n) {
    var A = KJUR.jws.JWS.inArray;
    if (p === null) return ![];
    if (typeof p !== "object") return ![];
    if (typeof p.length !== "number") return ![];

    for (var L = 0; L < p.length; L++) {
        if (!A(p[L], n)) return ![];
    }

    return !![];
};

KJUR.jws.JWS.inArray = function (p, n) {
    if (n === null) return ![];
    if (typeof n !== "object") return ![];
    if (typeof n.length !== "number") return ![];

    for (var a = 0; a < n.length; a++) {
        if (n[a] == p) return !![];
    }

    return ![];
};

KJUR.jws.JWS.jwsalg2sigalg = {
    "HS256": "HmacSHA256",
    "HS384": "HmacSHA384",
    "HS512": "HmacSHA512",
    "RS256": "SHA256withRSA",
    "RS384": "SHA384withRSA",
    "RS512": "SHA512withRSA",
    "ES256": "SHA256withECDSA",
    "ES384": "SHA384withECDSA",
    "PS256": "SHA256withRSAandMGF1",
    "PS384": "SHA384withRSAandMGF1",
    "PS512": "SHA512withRSAandMGF1",
    "none": "none"
};

KJUR.jws.JWS.isSafeJSONString = function (p, n, A) {
    var L = null;

    try {
        L = jsonParse(p);
        if (typeof L != "object") return 0;
        if (L.constructor === Array) return 0;
        return n && (n[A] = L), 1;
    } catch (g) {
        console.log(g);
        return 0;
    }
};

KJUR.jws.JWS.readSafeJSONString = function (p) {
    var n = null;

    try {
        n = jsonParse(p);
        if (typeof n != "object") return null;
        if (n.constructor === Array) return null;
        return n;
    } catch (A) {
        console.log(A);
        return null;
    }
};

KJUR.jws.JWS.getEncodedSignatureValueFromJWS = function (p) {
    var n = p.match(/^[^.]+\.[^.]+\.([^.]+)$/);
    if (n == null) throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
    return n[1];
};

KJUR.jws.JWS.getJWKthumbprint = function (p) {
    if (p.kty !== "RSA" && p.kty !== "EC" && p.kty !== "oct") throw "unsupported algorithm for JWK Thumprint";
    var n = "{";

    if (p.kty === "RSA") {
        if (typeof p.n != "string" || typeof p.e != "string") throw "wrong n and e value for RSA key";
        n += "\"e\":\"" + p.e + "\",";
        n += "\"kty\":\"" + p.kty + "\",";
        n += "\"n\":\"" + p.n + "\"}";
    } else {
        if (p.kty === "EC") {
            if (typeof p.crv != "string" || typeof p.x != "string" || typeof p.y != "string") throw "wrong crv, x and y value for EC key";
            n += "\"crv\":\"" + p.crv + "\",";
            n += "\"kty\":\"" + p.kty + "\",";
            n += "\"x\":\"" + p.x + "\",";
            n += "\"y\":\"" + p.y + "\"}";
        } else {
            if (p.kty === "oct") {
                if (typeof p.k != "string") throw "wrong k value for oct(symmetric) key";
                n += "\"kty\":\"" + p.kty + "\",";
                n += "\"k\":\"" + p.k + "\"}";
            }
        }
    }

    var A = rstrtohex(n);
    var L = KJUR.crypto.Util.hashHex(A, "sha256");
    var g = hextob64u(L);
    return g;
};

KJUR.jws.IntDate = {};

KJUR.jws.IntDate.get = function (p) {
    var n = KJUR.jws.IntDate;
    var A = n.getNow;
    var L = n.getZulu;
    if (p == "now") return A();else {
        if (p == "now + 1hour") return A() + 3600;else {
            if (p == "now + 1day") return A() + 86400;else {
                if (p == "now + 1month") return A() + 2592000;else {
                    if (p == "now + 1year") return A() + 31536000;else {
                        if (p.match(/Z$/)) return L(p);else {
                            if (p.match(/^[0-9]+$/)) return parseInt(p);
                        }
                    }
                }
            }
        }
    }
    throw "unsupported format: " + p;
};

KJUR.jws.IntDate.getZulu = function (p) {
    return zulutosec(p);
};

KJUR.jws.IntDate.getNow = function () {
    var p = ~~(new Date() / 1000);
    return p;
};

KJUR.jws.IntDate.intDate2UTCString = function (p) {
    var n = new Date(p * 1000);
    return n.toUTCString();
};

KJUR.jws.IntDate.intDate2Zulu = function (p) {
    var n = new Date(p * 1000);
    var A = ("0000" + n.getUTCFullYear()).slice(-4);
    var L = ("00" + (n.getUTCMonth() + 1)).slice(-2);
    var S = ("00" + n.getUTCDate()).slice(-2);
    var Y = ("00" + n.getUTCHours()).slice(-2);
    var J = ("00" + n.getUTCMinutes()).slice(-2);
    var C = ("00" + n.getUTCSeconds()).slice(-2);
    return A + L + S + Y + J + C + "Z";
};

if (typeof KJUR == "undefined" || !KJUR) {
    KJUR = {};
}

if (typeof KJUR.jws == "undefined" || !KJUR.jws) {
    KJUR.jws = {};
}

KJUR.jws.JWSJS = function () {
    var p = KJUR;
    var n = p.jws;
    var A = n.JWS;
    var L = A.readSafeJSONString;
    this.aHeader = [];
    this.sPayload = "";
    this.aSignature = [];

    this.init = function () {
        this.aHeader = [];
        this.sPayload = undefined;
        this.aSignature = [];
    };

    this.initWithJWS = function (g) {
        this.init();
        var S = g.split(".");
        if (S.length != 3) throw "malformed input JWS";
        this.aHeader.push(S[0]);
        this.sPayload = S[1];
        this.aSignature.push(S[2]);
    };

    this.addSignature = function (S, Y, J, C) {
        if (this.sPayload === undefined || this.sPayload === null) throw "there's no JSON-JS signature to add.";
        var V = this.aHeader.length;
        if (this.aHeader.length != this.aSignature.length) throw "aHeader.length != aSignature.length";

        try {
            var W = KJUR.jws.JWS.sign(S, Y, this.sPayload, J, C);
            var R = W.split(".");
            var B = R[0];
            var F = R[2];
            this.aHeader.push(R[0]);
            this.aSignature.push(R[2]);
        } catch (E) {
            console.log(E);

            if (this.aHeader.length > V) {
                this.aHeader.pop();
            }

            if (this.aSignature.length > V) {
                this.aSignature.pop();
            }

            throw "addSignature failed: " + E;
        }
    };

    this.verifyAll = function (S) {
        if (this.aHeader.length !== S.length || this.aSignature.length !== S.length) return ![];

        for (var Y = 0; Y < S.length; Y++) {
            var J = S[Y];
            if (J.length !== 2) return ![];
            var C = this.verifyNth(Y, J[0], J[1]);
            if (C === ![]) return ![];
        }

        return !![];
    };

    this.verifyNth = function (S, Y, J) {
        if (this.aHeader.length <= S || this.aSignature.length <= S) return ![];
        var C = this.aHeader[S];
        var V = this.aSignature[S];
        var W = C + "." + this.sPayload + "." + V;
        var R = ![];

        try {
            R = A.verify(W, Y, J);
        } catch (B) {
            console.log(B);
            return ![];
        }

        return R;
    };

    this.readJWSJS = function (S) {
        if (typeof S === "string") {
            var Y = L(S);
            if (Y == null) throw "argument is not safe JSON object string";
            this.aHeader = Y.headers;
            this.sPayload = Y.payload;
            this.aSignature = Y.signatures;
        } else try {
            if (S.headers.length > 0) this.aHeader = S.headers;else throw "malformed header";
            if (typeof S.payload === "string") this.sPayload = S.payload;else throw "malformed signatures";
            if (S.signatures.length > 0) this.aSignature = S.signatures;else throw "malformed signatures";
        } catch (J) {
            console.log(J);
            throw "malformed JWS-JS JSON object: " + J;
        }
    };

    this.getJSON = function () {
        return {
            "headers": this.aHeader,
            "payload": this.sPayload,
            "signatures": this.aSignature
        };
    };

    this.isEmpty = function () {
        if (this.aHeader.length == 0) return 1;
        return 0;
    };
};

var url = "/api/challenge56";

call = function (p) {
    var n = {
        "page": String(p)
    };
    $.ajax({
        "url": url,
        "dataType": "json",
        "async": !![],
        "data": n,
        "type": "POST",
        "beforeSend": function (c) {
            (function () {})();
        },
        "success": function (c) {
            var a = "<tr class=\"odd\">";
            var A = new JSEncrypt();
            A.setPrivateKey(PVA.toString("ascii"));
            datas = JSON.parse(A.decrypt(c.result)).data;
            $.each(datas, function (L, g) {
                var S = "<td class=\"info\">" + g.value + "</td>";
                a += S;
            });
            $(".data").text("").append(a + "</tr>");
        },
        "complete": function () {
            $("#page").paging({
                "nowPage": p,
                "pageNum": 100,
                "buttonNum": 7,
                "canJump": 1,
                "showOne": 1,
                "callback": function (c) {
                    call(c);
                }
            });
        },
        "error": function () {
            alert("检测到异常情况，请关闭抓包工具，使用chrome浏览器再试试");
            location.reload();
        }
    });
};

call(1);