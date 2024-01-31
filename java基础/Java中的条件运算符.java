//条件运算符（ ? : ）也称为 “三元运算符”。
//语法形式：布尔表达式 ？ 表达式1 ：表达式2
//运算过程：如果布尔表达式的值为 true ，则返回 表达式1 的值，否则返回 表达式2 的值
public class Java中的条件运算符 {
    public static void main(String[] args) {
        int score=68;
        String mark = score>=60 ?"及格":"不及格";
        System.out.println("考试成绩如何："+mark);
    }
}
