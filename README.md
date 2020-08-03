# angular

Payment gateway Redirect API  

ממשק זה מתאים בעיקר לאתרי סחר אלקטרוני עם עגלת קניות או מוצרים המנוהלים בצד לאפליקציה של בית העסק.
במידה ואין באתר ניהול מוצרים מומלץ להשתמש בדף תשלום 
ממשק זה תומך באפשרויות הבאות:
•	חיוב כרטיס אשראי
•	חיוב ויצירת טוקן לחיוב עתידי 
תיאור תהליך:
•	שליחת בקשה לחיוב (הזמנה)
•	המערכת תחזיר מזהה איחודי של ההזמנה 
•	יש להפנות את הרוכש אל דף תשלום עם המזהה הייחודי של ההזמנה
•	בסיום הרכישה המערכת תפנה את הרוכש לדף תודה (במידה וצוין על ידי הסוחר אחרת ברירת מחדל של המערכת)
•	כמו כן מערכת "תקבול"  עובדת עם IPN ( instant payment notification) על הרוכש להגדיר  כתובת באתר בה הוא יקבל את האישור הסופי של סגירת עסקה כולל מזהה של ההזמה במערכת תקבול עם המזהה של ההזמנה במערכת של הסוחר
•	ניתן לגשת לפרטי הזמנה לפי המזהה איחודי שהתקבל בIPN

