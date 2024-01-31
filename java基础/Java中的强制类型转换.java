// 可以看到，通过强制类型转换将 75.8 赋值给 int 型变量后，结果为 75，数值上并未进行四舍五入，而是直接将小数位截断。
public class Java中的强制类型转换 {
    public static void main(String[] args) {
        double heightAvg1=176.2;
        int heightAvg2=(int)heightAvg1;
        System.out.println(heightAvg1);
        System.out.println(heightAvg2);
    }
}
