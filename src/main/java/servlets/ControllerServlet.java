package servlets;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         if (request.getParameter("x") != null && !request.getParameter("x").equals("")
                 && request.getParameter("y") != null && !request.getParameter("y").equals("")
                 && request.getParameter("r") != null && !request.getParameter("r").equals("")) {
             request.getRequestDispatcher("/checker").forward(request, response);
         }
         request.getRequestDispatcher("/index.jsp").forward(request, response);

     }
}
