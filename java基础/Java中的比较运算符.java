// 注意哦：
//1、  > 、 < 、 >= 、 <= 只支持左右两边操作数是数值类型
//2、  == 、 != 两边的操作数既可以是数值类型，也可以是引用类型
public class Java中的比较运算符 {
    public static void main(String[] args) {
        int a=16;
        double b=9.5;
        String str1="hello";
        String str2="imooc";
        System.out.println("a等于b：" + (a == b));
        System.out.println("a大于b：" + (a > b));
        System.out.println("a小于等于b：" + (a <= b));
        System.out.println("str1等于str2：" + (str1 ==   str2));
    }
}
