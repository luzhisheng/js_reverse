// 所谓优先级，就是在表达式中的运算顺序。
public class Java中运算符的优先级 {
    public static void main(String[] args) {
        int m = 5;
        int n = 7;
        int  x = ( m * 8 / ( n + 2 ) ) % m ;
        System.out.println("m:" + m);
        System.out.println("n:" + n);
        System.out.println("x:" + x);
    }
}
