function checkStrong(sValue) {
    var modes = 0;
    //正则表达式验证符合要求的
    if (sValue.length < 1) return modes;
    if (/\d/.test(sValue)) modes++; //数字
    if (/[a-z]/.test(sValue)) modes++; //小写
    if (/[A-Z]/.test(sValue)) modes++; //大写
    if (/\W/.test(sValue)) modes++; //特殊字符
  
    //逻辑处理
    switch (modes) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return sValue.length < 12 ? 3 : 4;
    }
  }
  
  console.log(checkStrong("QQww12456asdqweq."));
  