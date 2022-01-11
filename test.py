order_time = '2022-01-09 22:30:54.517281'
real_time  = '2022-01-09 23:10:54.517281'

order_hour, order_minute = map(int, order_time[11:-10].split(':'))
order_date = order_time[:-16]

real_hour, real_minute = map(int, real_time[11:-10].split(':'))
real_date = real_time[:-16]

order_minute = order_hour * 60 + order_minute
real_minute = real_hour * 60 + real_minute


if real_date == order_date:
	if real_minute - order_minute <= 30:
		print(True)
	else:
		print(False)
else:
	print(False)



# print(type(order_hour))
# print(order_minute)
# print(order_time[11:-10])

