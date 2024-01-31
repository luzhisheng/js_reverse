public class Java中的数组如何使用 {
    public static void main(String[] args) {

        // 定义一个长度为5的字符串数组，保存考试科目信息
        String[] subjects = new String[5];

        // 分别为数组中的元素赋值
        subjects[0] = "Oracle";
        subjects[1] = "PHP";
        subjects[2] = "Linux";
        subjects[3] = "Java";
        subjects[4] = "HTML";

        System.out.println("数组中第4个科目为：" + subjects[3]);
    }
}
