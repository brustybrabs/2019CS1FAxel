import java.io.*;
import java.net.*;

public class MyServer1
{
    ServerSocket ss;
    Socket s;
    DataInputStream dis;
    DataOutputStream dos;
    public MyServer1()
    {
        try
        {
            System.out.println("Server Started");
            ss=new ServerSocket(10);
            s=ss.accept();
            System.out.println(s);
            System.out.println("CLIENT CONNECTED");
            dis= new DataInputStream(s.getInputStream());
            dos= new DataOutputStream(s.getOutputStream());
            ServerChat();
        }
        catch(Exception e)
        {
             System.out.println(e);
        }
    }

    public static void main (String as[])
    {
         new MyServer1();
    }

    public void ServerChat() throws IOException
    {
         String str, s1;
         do
         {
             str=dis.readUTF();
             System.out.println("Client Message:"+str);
             BufferedReader br=new BufferedReader(new   InputStreamReader(System.in));
             s1=br.readLine();
             dos.writeUTF(s1);
             dos.flush();
         }
         while(!s1.equals("bye"));
    }
}

import java.io.*;
import java.net.*;

public class MyClient1
{
    Socket s;
    DataInputStream din;
    DataOutputStream dout;
    public MyClient1()
    {
         try
         {
             //s=new Socket("10.10.0.3,10");
             s=new Socket("localhost",10);
             System.out.println(s);
             din= new DataInputStream(s.getInputStream());
             dout= new DataOutputStream(s.getOutputStream());
             ClientChat();
         }
         catch(Exception e)
         {
             System.out.println(e);
         }
     }
     public void ClientChat() throws IOException
     {
           BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
           String s1;
           do
           {
               s1=br.readLine();
               dout.writeUTF(s1);
               dout.flush();
               System.out.println("Server Message:"+din.readUTF());
           }
           while(!s1.equals("stop"));
    }
    public static void main(String as[])
    {
        new MyClient1(); 
    }
}
java client-server