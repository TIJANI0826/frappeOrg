import frappe
def get_content(context):
	context['users'] = frappe.get_all('User')