// 在 Java 程序中，不同的基本数据类型的数据之间经常需要进行相互转换。
// 1.目标类型能与源类型兼容，如 double 型兼容 int 型，但是 char 型不能兼容 int 型
// 2.目标类型大于源类型，如 double 类型长度为 8 字节， int 类型为 4 字节，因此 double 类型的变量里直接可以存放 int 类型的数据，但反过来就不可以了
public class Java中的自动类型转换 {
    public static void main(String[] args) {
        double avg1=78.5;
        int rise=5;
        double avg2=avg1+rise;
        System.out.println("考试平均分："+avg1);
        System.out.println("调整后的平均分："+avg2);
    }
}
