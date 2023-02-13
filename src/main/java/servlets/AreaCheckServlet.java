package servlets;



import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalTime;

public class AreaCheckServlet extends HttpServlet {

    private boolean checkResult(double x, double y, double r) {
        if (x >= 0 && y >= 0) {
            return x + y <= r;
        } else if (x >= 0 && y <= 0) {
            return x * x + y * y <= r * r * 1/4;
        } else if (x <= 0 && y >= 0) {
            return x <= r && y >= - r;
        } else return false;
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        long currentTime = System.currentTimeMillis();


        double x = Double.parseDouble(request.getParameter("x"));
        double y = Double.parseDouble(request.getParameter("y").replace(",", "."));
        double r = Double.parseDouble(request.getParameter("r"));

        String inArea;
        if (checkResult(x, y, r)) inArea = "Входит";
        else inArea = "Не входит";
        double compile_time = (System.currentTimeMillis() - currentTime) / 1000.0;
        LocalTime time = LocalTime.now();
        int hours = time.getHour();
        int minutes = time.getMinute();
        int seconds = time.getSecond();
        ServletContext servletContext = getServletContext();
        String result_str = "<tr>" + "<td>" + x + "</td>" + "<td>" + y + "</td>" + "<td>" + r + "</td>" + "<td>" + inArea + "</td>" + "<td>" + compile_time + "</td>" + "<td>" + hours + ":" + minutes + ":" + seconds + "</td>" + "</tr>";
        if (servletContext.getAttribute("data") != null) {
            result_str += (String) servletContext.getAttribute("data");
        }
        servletContext.setAttribute("data", result_str);
        response.sendRedirect(request.getContextPath() + "/table.jsp");
    }
}
