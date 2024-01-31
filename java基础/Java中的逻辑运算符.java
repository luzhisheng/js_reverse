//1、 与：要求所有人都投票同意，才能通过某议题
//2、 或：只要求一个人投票同意就可以通过某议题
//3、 非：某人原本投票同意，通过非运算符，可以使其投票无效
//4、 异或：有且只能有一个人投票同意，才可以通过某议题
public class Java中的逻辑运算符 {
    public static void main(String[] args) {
        boolean a = true; // a同意
        boolean b = false; // b反对
        boolean c = false; // c反对
        boolean d = true; // d同意
        System.out.println((a&&b) + "未通过");
        System.out.println((a||b) + "通过");
        System.out.println((!a) + "未通过");
        System.out.println((c ^ d) + "通过");
    }
}
