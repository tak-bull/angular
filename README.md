# angular

Payment gateway Redirect API  
Pay page redirect interface
This interface is primarily for e-commerce websites with a shopping cart or products that are managed beside an application for a business place
If there is no product management on the website it is recommended to use paypage 
this interface supports the following options :
 credit card transactions 
 tokenization for future transactions
Process description :
Send request for a transaction
The system brings back a unique ID
You need to redirect the client to the pay page with the unique ID 
At the end of the transactions the system will redirect the client to a thank you page
Tak bull system works with an ipn instant payment notification the client must define an address in the side in which it will get the final approval of the transaction including an ID of the order in a couple with a unique ID in the merchant system
The order can be accessed by the unique ID from the ipn

