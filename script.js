var S = [["HTML", 80], ["CSS", 60], ["JavaScript", 40]];
var h = ""; S.forEach(function (s) { h += '<div class="sk"><div><span>' + s[0] + '</span><span>' + s[1] + '%</span></div><div class="bar"><i data-w="' + s[1] + '"></i></div></div>' });
document.getElementById("sk").innerHTML = h;
var go = function () { document.querySelectorAll(".bar i").forEach(function (e) { e.style.width = e.dataset.w + "%" }) };
if ("IntersectionObserver" in window) { new IntersectionObserver(function (a, o) { if (a[0].isIntersecting) { go(); o.disconnect() } }).observe(document.getElementById("sk")) } else go();
var R = document.documentElement, B = document.getElementById("tg");
function cur() { return R.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark") }
function setT(t) { R.dataset.theme = t; B.textContent = t === "dark" ? "☀" : "☾"; try { localStorage.setItem("th", t) } catch (e) { } }
try { var sv = localStorage.getItem("th"); if (sv) R.dataset.theme = sv } catch (e) { }
setT(cur());
B.onclick = function () { setT(cur() === "dark" ? "light" : "dark") };
