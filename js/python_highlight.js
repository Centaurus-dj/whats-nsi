function pyMode(text){
  var rest = txt, done = "", esc = [], i, cc, tt = "", sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, numpos, mypos, dotpos, y;
  for (i = 0; i < rest.length; i++)  {
    cc = rest.substr(i, 1);
    if (cc == "#") {
      esc.push(rest.substr(i, 2));
      cc = "W3PYESCAPE";
      i++;
    }
    tt += cc;
  }
  rest = tt;
  y = 1;
  while (y == 1) {
    sfnuttpos = getPos(rest, "'", "'", pyStringMode);
    dfnuttpos = getPos(rest, '"', '"', pyStringMode);
    compos = getPos(rest, /\/\*/, "#", commentMode);
    comlinepos = getPos(rest, /\/\//, "<br>", commentMode);
    numpos = getNumPos(rest, pyNumberMode);
    keywordpos = getKeywordPos("py", rest, pyKeywordMode);
    dotpos = getDotPos(rest, pyPropertyMode);
    if (Math.max(numpos[0], sfnuttpos[0], dfnuttpos[0], compos[0], comlinepos[0], keywordpos[0], dotpos[0]) == -1) {break;}
    mypos = getMinPos(numpos, sfnuttpos, dfnuttpos, compos, comlinepos, keywordpos, dotpos);
    if (mypos[0] == -1) {break;}
    if (mypos[0] > -1) {
      done += rest.substring(0, mypos[0]);
      done += mypos[2](rest.substring(mypos[0], mypos[1]));
      rest = rest.substr(mypos[1]);
    }
  }
  rest = done + rest;
  for (i = 0; i < esc.length; i++) {
    rest = rest.replace("W3PYESCAPE", esc[i]);
  }
  return "<span style=color:" + pycolor + ">" + rest + "</span>";
}
function pyStringMode(txt) {
  return "<span style=color:" + pystringcolor + ">" + txt + "</span>";
}
function pyKeywordMode(txt) {
  return "<span style=color:" + pykeywordcolor + ">" + txt + "</span>";
}
function pyNumberMode(txt) {
  return "<span style=color:" + pynumbercolor + ">" + txt + "</span>";
}
function pyPropertyMode(txt) {
  return "<span style=color:" + pypropertycolor + ">" + txt + "</span>";
}
