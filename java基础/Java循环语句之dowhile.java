// 执行过程：
//<1>、 先执行一遍循环操作，然后判断循环条件是否成立
//<2>、 如果条件成立，继续执行< 1 > 、< 2 >，直到循环条件不成立为止
//特点： 先执行，后判断
public class Java循环语句之dowhile {
    public static void main(String[] args) {
        int sum = 0; // 保存 1-50 之间偶数的和
        int num = 2; // 代表 1-50 之间的偶数
        do {
            //实现累加求和
            num = num + 2; // 每执行一次将数值加2，以进行下次循环条件判断
        } while (num < 50); // 满足数值在 1-50 之间时重复执行循环
        System.out.println(" 50以内的偶数之和为：" + sum);
    }
}
