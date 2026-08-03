// import java.util.*;

// class Gathiya {
//     private String name;
//     private double price;
//     private int quantity;

//     public void setGathiya(String name, double price, int quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     public double getTotal() {
//         return price * quantity;
//     }

//     public void display() {
//         System.out.printf("%-10s %5d %10.2f %10.2f%n",
//                 name, quantity, price, getTotal());
//     }
// }

// public class Main {
//     public static void main(String[] args) {

//         Gathiya g1 = new Gathiya();
//         Gathiya g2 = new Gathiya();
//         Gathiya g3 = new Gathiya();
//         Gathiya g4 = new Gathiya();

//         g1.setGathiya("Vanela", 200.00, 2);
//         g2.setGathiya("Fafda", 300.00, 1);
//         g3.setGathiya("Jalebi", 150.00, 3);
//         g4.setGathiya("Dahi", 650.00, 1);

//         System.out.println("========= FARSAN SHOP =========");
//         System.out.printf("%-10s %5s %10s %10s%n",
//                 "Item", "Qty", "Price", "Total");
//         System.out.println("----------------------------------------");

//         g1.display();
//         g2.display();
//         g3.display();
//         g4.display();

//         double grandTotal = g1.getTotal() + g2.getTotal()
//                           + g3.getTotal() + g4.getTotal();

//         System.out.println("----------------------------------------");
//         System.out.printf("Grand Total : %.2f%n", grandTotal);
//     }
// }


/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
// import java.util.*;
// class Gathiya{
//     private String s;
//     private double p;
//     public void setGathiya(String s,double p){
//         this.s = s;
//         this.p = p;
//     }
//     public String getGathiya(){
//         return s+" : "+p;
        
//     }
    
// }
// public class Main
// {
// 	public static void main(String[] args) {
// 		Gathiya g1 = new Gathiya();
// 		Gathiya g2 = new Gathiya();
// 		Gathiya g3 = new Gathiya();
// 		Gathiya g4 = new Gathiya();
// 		g1.setGathiya("Vanela",200.00);
// 		g2.setGathiya("Fafda",300.00);
// 		g3.setGathiya("Jalebi",150.00);
// 		g4.setGathiya("Dahi",650.00);
		
// 		System.out.println(g1.getGathiya());
// 		System.out.println(g2.getGathiya());
// 		System.out.println(g3.getGathiya());
// 		System.out.println(g4.getGathiya());
		
// 	}
// }

// Online Java Compiler
// Use this editor to write, compile and run your Java code online
// import java.util.*;
// class BankAcc{
//     private double balance;
//     public void setBalance(double balance){
//         this.balance = balance;
//     }
//     public void deposit(double amount){
//         if (amount>0){
//             balance+=amount;
//         }
//     }
//     public void withdraw(double amount){
//         if(amount>0 && amount<=balance){
//             balance-=amount;
//         }else{
//             System.out.println("balance is low to be withdraw");
//             System.out.println("you can maximun upto "+ this.balance);
//         }
//     }
//     public double getBalance(){
//         return balance;
//     }
// }
// class Main {
//     public static void main(String[] args) {
//         BankAcc a1 = new BankAcc();
//         a1.setBalance(10000.00);
//         a1.deposit(5000.00);
//         System.out.println(a1.getBalance());
//         a1.withdraw(20000.0);
//         System.out.println(a1.getBalance());
        
//     }
// }

