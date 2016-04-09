---
title: 'Creating a web chat with PHP and MySQL'
published: true
summary:
    enabled: '1'
    format: long
taxonomy:
    tag:
        - PHP
        - MySQL
        - AJAX
    category:
        - PHP
content:
    pagination: true
---

In this Tutorial I'll show you how you can write your very own web-based Chat App using HTML, CSS, JS/jQuery, PHP and MySQL.

[Check out the live example](http://f-rilling.com/projects/rChat/)

For a full functioning Web-Chat we'll need three basic components:

*   A Client Side HTML Document that sends the Chat Text and receives Data from the database
*   A PHP file which writes user input into the database
*   A database (we'll use MySQL in this Example) to save and manage the messages

So let's start by creating our Front End.

### The User Interface

Let's start by creating a basic HTML template with jquery and some pretty standard code:

```html
<html>
  <head>

  </head>
  <body>

  </body>
</html> 
```

Most Chat Apps consist of a basic form with an output field to show the messages, an input field for our user to write into, optionally an input field for the username and last but not least a button to send the message. So lets write those into our container div

```html
<form id="chat">
    <textarea id="chatOutput"></textarea>
    <input type="text" id="username" placeholder="username">
    <input type="text" id="chatText" paceholder="type your text here">
    <button id="chatSend">Send</button>
</form>
```

Of course our chat doesnt look like a chat at the moment, but hey, that's what CSS is for right? so lets style it a bit:

```css
#container {
    width: 500px;
    margin: 50px auto;
  }
#chatOutput {
    width: 400px;
    height: 300px;
    border: 1px solid #333;
  }
#username {
    width: 100px;
  }
#chatText {
    width: 285px;
  }
```

Now that looks better. Feel free to style it even more.

### JS/jQuery

Our chat doesn't really do anything right now, so lets look into that. First up we'll setup jQuery and add a event handler to the "Send" button like this:

```javascript
$(document).ready(function(){

  /*Event Handler*/
  $("#chatSend").click(function(){

  });

});
```

So here is what we want to do: Whenever the Button is pressed, we want our script to send a jQuery "post" AJAX to the server to handle our user input. In order to achieve that we must check if the user inputed anything at all.

```javascript
$(document).ready(function(){

  $("#chatSend").click(function(){

      /*Get User Input*/
      var text=$("#chatText").val();
      var username=$("#username").val();

      if(text!=undefined&&username!=undefined){

      /*Send Stuff*/

      }

  });

});
```

If we want to write the user input into a database we must send it to a php file first which will validate the input and write the data into the database, In this example we'll use a new file called "write.php". Then we will send a jQuery AJAX $.post to "write.php".

```javascript
$(document).ready(function(){

  $("#chatSend").click(function(){

    /*Get User Input*/
    var text=$("#chatText").val();
    var username=$("#username").val();

      if(text!=undefined&&username!=undefined){

        /*Send Stuff*/
        var url = "write.php?username=" +
            decodeURI(username) +
            "&text=" +
            decodeURI(text));
        $.post(url);

    }

  });

});
```

### Writing into the Database

In our "write.php" we'll want to **Store** Data so we'll have to connect to our database first. We achieve this by using "mysqli_connect".

```php
$con=mysqli_connect("enterURLhere*","databaseNameHere","passwordGoesHere","yourUsername");

/*Check connection*/
if (mysqli_connect_errno()){
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
```

We recieve the user input from the URL so we can fetch them with "$_GET['']".

**Make sure to use "mysqli_escape_string" to escape the user input! Otherwise your chat is vurnerable to [SQL-Injections!](https://en.wikipedia.org/wiki/SQL_injection)**

Also we want to save the time at which the data was recieved, this is done by getting the server time and save it in "$time".

```php
$name=mysqli_real_escape_string($con,$_GET["name"]);
$text=mysqli_real_escape_string($con,$_GET["text"]);
$time=substr(str_replace("+",":",str_replace("T"," ",date(DATE_ATOM))),0,18);` 
```

Now we are ready to write the user input into the Database. This can be done by sending a "mysqli_query" to the database containing our data; We want the sever to show an error when it doesnt work, and to show the data if it succeeds.

```php
$sql="INSERT INTO chat (time, name, text)
  VALUES
  ('$time','$name','$text')";

  if (!mysqli_query($con,$sql)){
    die('Error: ' . mysqli_error($con));
  }	else{

  echo "$name wrote '$text'";
}

mysqli_close($con);
```

### The Database

assuming you haven't created your table already we will now do this. Our table is pretty simple: one column for time, text and name each plus an id column which increases by itself everytime something gets written, while being our index. The easist way to achieve this is to enter the following MySQL code in the SQL tab of your PhpMyAdmin:

```sql
CREATE TABLE chat (
`id` MEDIUMINT NOT NULL AUTO_INCREMENT,
`time` timestamp NOT NULL ,
`name` varchar(32) NOT NULL default '',
`text` text(300) NOT NULL default '',
PRIMARY KEY (id)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8
```

Now our chat is able to store the input the user enters on our chat site, but we dont see it on the chat HTMl site. Time to change this!

### Reading the Database

the fact that PHP only gets executed when the user request the page makes us unable to simply include the data of the database into our chat site. A way to workaround this is having a seperate file like "read.php" where we will do this. Later we will load the contents of this site dynamically trough jQuery.

Our "read.php" looks something like this:

```php
$con=mysqli_connect("database url","database user","password","database name");
if (mysqli_connect_errno()) {
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
```

Now we want our "read.php" to output the contents of the database, sorted by time; the data gets put into a nice html structure

```php
$data = "SELECT * FROM databaseName ORDER BY Time ASC";
$result = mysqli_query($con, $data);

while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){

echo "

<div class="chatPost">

";
echo $row['Username'];
echo "

[";
$row['Time'] = substr($row['Time'], 11, strpos($row['Time'], ' '));
echo $row['Time'];
echo "]: 

";
echo "

";
echo $row['Content'];
echo "

</div>

";
}

mysqli_free_result($result);
mysqli_close($con);
```

Now this file always outputs the chat whenever acessed; we only need to somehow get the data into our chat site.

### Reading the output

For this we will use jQuery again, in a simmiliar manner like we did when we sent the User input to the database. But in this case, we will use $.get, a way of retrieving data from an URl rather than sending.

```javascript
function updateChat() {
  $.get("read.php", function(data) {
    $("#chatOutput").html(data);
  });
}
```

We want this function to trigger every 1000 miliseconds, which we can do with a "setInterval(updateChat(),100)". Our javascript will now look something like this:
```javascript
    $(document).ready(function(){

        $("#chatSend").click(function(){

            /*Get User Input*/
            var text=$("#chatText").val();
            var username=$("#username").val();

              if(text!=undefined&&username!=undefined){

              /*Send Stuff*/
              var url = "write.php?username=" +
                  decodeURI(username) +
                  "&text=" +
                  decodeURI(text));
              $.post(url);

            }

          });

      setTimeout(
        function() {updateChat();},
         1000);

      function updateChat() {
        $.get("read.php", function(data) {
          $("#chatOutput").html(data);
        });
      }

    });
```

Done! Now our chat will update itself every 1000 miliseconds. Your chat should be working now.

If you have questions regarding this project send me an email.