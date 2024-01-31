// 算术运算符主要用于进行基本的算术运算，如加法、减法、乘法、除法等。
// 其中，++ 和 -- 既可以出现在操作数的左边，也可以出现在右边，但结果是不同滴
public class Java中的算术运算符 {
    public static void main(String[] args) {
        int age1=24;
        int age2=18;
        int age3=36;
        int age4=27;
        int sum=age1+age2+age3+age4;
        double avg=sum/4;
        int minus=age1-age2;
        int newAge=--age1;
        System.out.println("年龄总和："+sum);
        System.out.println("平均年龄："+avg);
        System.out.println("年龄差值："+minus);
        System.out.println("自减后的年龄："+newAge);
    }
}
