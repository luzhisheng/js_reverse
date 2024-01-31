public class Java循环语句之while {
    public static void main(String[] args) {
        int i = 1; // 代表 1 - 5 之间的数字
        // 当变量小于等于 5 时执行循环
        while (i < 6) {
            // 输出变量的值，并且对变量加 1，以便于进行下次循环条件判断
            System.out.println(i);
            i++;
        }
    }
}
