// 赋值运算符是指为变量或常量指定数值的符号。如可以使用 “=” 将右边的表达式结果赋给左边的操作数。
public class Java中的赋值运算符 {
    public static void main(String[] args) {
        int one = 10 ;
        int two = 20 ;
        int three = 0 ;
        three = one+two;
        System.out.println("three=one+two==>"+three);
        three+=one;
        System.out.println("three+=one==>"+three);
        three-=one;
        System.out.println("three-=one==>"+three);
        three*=one;
        System.out.println("three*=one==>"+three);
        three/=one;
        System.out.println("three/=one==>"+three);
        three%=one;
        System.out.println("three%=one==>"+three);
    }
}
